# Content Management

This page does not need advanced content management. Here I store whatever I want to show in this box as markdown in separate _\*.md_-files.

The **Content Model** is the source for generating the majority of this page including the **stack**, **routing** and these **descriptions**.

I've found this to be a fast and simple way to manage content in smaller projects. The **Content Model** could easily be fetched via an API or similar in the future.

### Content Model

```ts
type Content = {
  title: string;
  markdown: import("*.md");
  path: string;
};
type Project = {
  path: string;
  title: string;
  short: string;
  overview: Content;
  stack: Content[];
  thumb: import("*.png");
};
type ContentModel = {
  projects: Project[];
  about: Project;
  contact: Content;
};
```
