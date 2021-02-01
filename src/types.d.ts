type Content = { title: string, markdown: import("*.md"), path: string }

type SectionTitle = string

type StackContent = {
  path:string
  overview:Content
  content:Content[]
}
  
type ContentModel = {
  portfolio: StackContent
  // amity: StackContent
  // ti-do: StackContent
  // hackdayPlanner: StackContent
  about: Content
  contact: Content
}
