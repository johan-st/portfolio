type Content = { title: string, markdown: import("*.md"), path: string }

type SectionTitle = string

type StackContent = {
    overview:Content,
    content:Content[]
  }
  
type ContentModel = {
  stack: StackContent
  other:Content[]
}
