# Cache Warmer
_[GitHub repository](https://github.com/johan-st/cache-warmer)_
The initial repository is private since it contains sensitive information and defaults targeting an employers servers. This is the public, open source repository with general examples as defaults.

A small cli-tool using the [go-colly](https://pkg.go.dev/github.com/gocolly/colly) scraping framework to clear and warm the cache.

## Idea
The idea is to trigger cache regeneration by sending a get request to all desired urls after clearing the cache. The tool has evolved with the daily use and changing requirements of our live enviorments.

## Usage
Given a regex for filtering urls and an initial url to start from it will crawl all sites linked to from the initial url.

### Flags
```
  -a string
        UserAgent: Set custom value for the "User-Agent" header. (default "cache-warmer_v2022-05-05")
  -c string
        Curl: Make a curl to the given url before starting warmer. Warmer will not start if response status code is not 200.
  -d int
        Depth: Defines how many steps to follow links found. '1' is just the initial url. (default 2)
  -f string
        Filter: Accepts a regular expression and only visits urls matching that expression. (default "example\.com")
  -i string
        Initial Url: Defines a starting point for the warmer. (default "https://www.example.com/")
  -v    Verbose: Enables extra printouts.
  -w int
        Workers: How many workers to use. (default 1)
```
## Build
```
$ go build -o ./build/cache-warmer .
```


## future Ideas
- list erronious urls (maybe save list from previous run and monitor where they are on the page on subsequent run)
- email alert on error

