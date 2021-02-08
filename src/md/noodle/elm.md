# elm
Elm [(elm-lang.org)](https://elm-lang.org) is a very interesting language. It boasts _no runtime exceptions_, _great performance_ and _small assets_.

For me elm was a gateway into functional languages and have since inspired me to think more of _"the what"_ of things instead of _"the how"_ (declarative vs imperative). As a result I feel my code is clearer and easier to follow and I have become more confident in my abilities. **T**he **E**lm **A**chitecture (TEA) inspires how I prefer to structure most my apps.

## example elm code:
This is a complete implementation of the unsplash gallery available [here](https://salty-noodles.herokuapp.com/gallery).

(_well.. It lacks css so __almost__ complete.._)
```elm
module Main exposing (..)

import Array exposing (Array)
import Browser
import Html exposing (..)
import Html.Attributes as Attr exposing (alt, class, classList, placeholder, src, type_)
import Html.Events exposing (..)
import Http
import Json.Decode as D exposing (Decoder, field, string)
import Json.Encode as E
import Page.Search exposing (subscriptions)



-- Model
-- Defines structure of the data

type alias Model =
    { input : String
    , cards : Array Card
    , pageMeta : UnsplashMeta
    , error : Maybe Http.Error
    }

-- Messages define events that change the Model
type Msg
    = GotUnsplashPage (Result Http.Error UnsplashPage)
    | InputChanged String
    | SearchClicked String
    | CardClicked Int


-- Takes a Msg and the current Model and produces an updated Model
update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotUnsplashPage result ->
            case result of
                Ok unsplashPage ->
                    ( { model | cards = Array.fromList <| List.map imgToCard unsplashPage.images }, Cmd.none )

                Err err ->
                    ( { model | error = Just err }, Cmd.none )

        InputChanged newValue ->
            ( { model | input = newValue }, Cmd.none )

        SearchClicked query ->
            ( model, unsplashSearch query )

        CardClicked index ->
            let
                newCards =
                    toggleCard index model.cards
            in
            ( { model | cards = newCards }, Cmd.none )

-- Defines the initial Model
init : flags -> ( Model, Cmd Msg )
init _ =
    ( { input = ""
      , cards = Array.empty
      , pageMeta = UnsplashMeta 1 Nothing Nothing
      , error = Nothing
      }
    , Cmd.none
    )

-- flips a card based on index
toggleCard : Int -> Array Card -> Array Card
toggleCard index cards =
    let
        maybeCard =
            Array.get index cards

        newCards =
            Array.map (\c -> { c | selected = False }) cards
    in
    case maybeCard of
        Just card ->
            Array.set index { card | selected = not card.selected } newCards

        Nothing ->
            cards



-- VIEW 
-- Defines how the Model should be translated into "on-screen" content


view : Model -> Html Msg
view model =
    div []
        [ section [ class "gallery" ]
            [ h2 [ class "gallery__header" ] [ text "by the power of the unsplash api" ]
            , form [ class "gallery_search" ]
                [ input [ class "gallery__input", type_ "text", placeholder "image search", onInput InputChanged ] []
                , input
                    [ class "gallery__submit"
                    , type_ "button"
                    , Attr.value "find"
                    , onClick (SearchClicked model.input)
                    ]
                    []
                ]
            , div [ class "gallery__cardholder" ]
                (List.map imageCard (Array.toIndexedList model.cards))
            ]
        ]

-- Function return html for a single image
imageCard : ( Int, Card ) -> Html Msg
imageCard ( index, card ) =
    div
        [ classList
            [ ( "gallery__card", True )
            , ( "gallery__card--selected", card.selected )
            ]
        , onClick (CardClicked index)
        ]
        [ div [ class "gallery__card-inner" ]
            [ div [ class "gallery__card-front" ]
                [ img
                    [ class "gallery__card-img"
                    , src card.src.url
                    , alt (Maybe.withDefault "" card.src.alt)
                    ]
                    []
                , div [ class "gallery__card-front-text" ] [ text (String.fromInt card.src.likes ++ " people liked this") ]
                ]
            , div [ class "gallery__card-back" ]
                [ text
                    ("by " ++ card.src.user.name ++ " from " ++ Maybe.withDefault "unknown" card.src.user.location)
                ]
            ]
        ]

imgToCard : Image -> Card
imgToCard img =
    { src = img, selected = False }


type alias Card =
    { src : Image
    , selected : Bool
    }

unsplashSearch : String -> Cmd Msg
unsplashSearch query =
    Http.get
        { url = "/api/unsplash/search/photos?query=" ++ query
        , expect = Http.expectJson GotUnsplashPage unsplashPageDecoder
        }


type alias UnsplashPage =
    { total : Int
    , totalPages : Int
    , images : List Image
    }


type alias UnsplashMeta =
    { current : Int
    , next : Maybe Int
    , prev : Maybe Int
    }


type alias Image =
    { id : String
    , description : Maybe String
    , alt : Maybe String
    , url : String
    , likes : Int
    , user : User
    }


type alias User =
    { name : String
    , location : Maybe String
    , bio : Maybe String
    }



-- DECODERS
-- Defines how to create types from json


unsplashPageDecoder : D.Decoder UnsplashPage
unsplashPageDecoder =
    D.map3 UnsplashPage
        (D.field "total" D.int)
        (D.field "total_pages" D.int)
        (D.field "results" (D.list unsplashDecoder))


unsplashDecoder : D.Decoder Image
unsplashDecoder =
    D.map6 Image
        (D.field "id" D.string)
        (D.field "description" (D.nullable D.string))
        (D.field "alt_description" (D.nullable D.string))
        (D.at [ "urls", "regular" ] D.string)
        (D.field "likes" D.int)
        (D.field "user" userDecoder)


userDecoder : D.Decoder User
userDecoder =
    D.map3 User
        (D.field "name" D.string)
        (D.field "location" (D.nullable D.string))
        (D.field "bio" (D.nullable D.string))



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , subscriptions = subscriptions
        , update = update
        , view = view
        }


```