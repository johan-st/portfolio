# Content Management 
This page has no need of advanced content management. For this portfolio I store these descriptions as markdown in separate files which I into an object _(see example below)_. The object is then used as a source for generating this page including stack and these descriptions. 

I've found this to be a fast and simple way to manage content in smaller projects, furthermore the content object could easily be fetched via an api or similar.  



_example:_
```ts
import * as content_md from './md/content.md'
const content: Content[] = [
  {
    title: 'Content',
    markdown: content_md,
    path: '/content'
  },...

]
```
    