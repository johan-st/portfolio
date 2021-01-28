# heroku

At the moment this app is deployed on _heroku_. As one of many service providers, _heroku_ stands out as a free _(for small projects)_ and streamlined experience. I build, push and relese my app with these commands. 


```sh
npm run build
```
```sh
heroku container:push web -a johan-st
```
```sh
heroku container:release web -a johan-st
```