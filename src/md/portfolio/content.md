# Content Management 
This page does not need advanced content management. Here I store these descriptions as markdown in separate _*.md_-files. I import the markdown-files into an object I call _content_ _(see example below)_. 

The _content_ object is the source for generating the majority of this page including the stack and these descriptions. 

I've found this to be a fast and simple way to manage content in smaller projects. The content object could easily be fetched via an API or similar in the future.

### Content Model
```ts
type ContentModel = {
    projects: Project[]
    about: Content
    contact: Content
  }
}
type Project = { 
  path: string
  title: string
  short: string
  overview:Content
  content:Content[]
  thumb: import("*.png") 
}
type Content = { 
    title: string, 
    markdown: import("*.md"), 
    path: string 
```