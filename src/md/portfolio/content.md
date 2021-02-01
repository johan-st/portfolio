# Content Management 
This page does not need advanced content management. Here I store these descriptions as markdown in separate _*.md_-files. I import the markdown-files into an object I call _content_ _(see example below)_. 

The _content_ object is the source for generating the majority of this page including the stack and these descriptions. 

I've found this to be a fast and simple way to manage content in smaller projects. The content object could easily be fetched via an API or similar in the future.

_example:_
```ts
import * as content_md from './md/content.md'

const content: Content[] = [
  {
    title: 'Content',
    markdown: content_md,
    path: '/content'
  },... ]

export { content }
```