type Content = { 
  title: string, 
  markdown: import("*.md"), 
  path: string 
}

type Project = { 
  path: string
  title: string
  short: string
  overview:Content
  content:Content[]
  thumb: import("*.png") 
}

type ContentModel = {
  projects: Project[]
  about: Content
  contact: Content
}
