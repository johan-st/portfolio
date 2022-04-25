# Cache Warmer

A small cli-tool using the [go-colly](https://pkg.go.dev/github.com/gocolly/colly) scraping framework to clear and warm the cache.

The current repository is private since it contains sensitive information and defaults targeting my current employers servers. I intend to create a public, open source repository with general examples as defaults.

## Idea

The idea is to trigger cache regeneration by sending a get request to all desired urls after clearing the cache. The tool has evolved with the daily use and changing requirements of our live enviorments.

### Basics

Given a regex to filter urls by and an initial url the tool will recursivly crawl all sites linked to from the initial url.

The tool is can handle XML and HTML and it accepts flags to set conditions and behaviour.

### Flags

- **-c** _string_ | **Curl:** Make a curl to the given url before starting warmer. Warmer will not start if response status code is not 200.
- **-d** _int_ | **Depth:** Defines how many steps to follow links found. '1' is just the initial url. _(default 5)_
- **-f** _string_ | **Filter:** Accepts a regular expression and only visits urls matching that expression.
- **-i** _string_ | **Initial Url:** Defines a starting point for the warmer.
- **-v** | **Verbose:** Enables extra printouts.
- **-w** _int_ | **Workers:** How many workers to use. (default 1)
