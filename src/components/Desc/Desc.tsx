import React from 'react'
import './Desc.css'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import gfm from 'remark-gfm'

const renderers = {
  code: ({ language, value }: { language: any, value: any }) => {
    return <SyntaxHighlighter
      showLineNumbers
      style={theme} language={language} children={value} />
  }
}

type DescProps = {
  content: Content
}

const Desc = (props: DescProps): JSX.Element => {
  return (
    <section id="desc" className="description">
      <ReactMarkdown
        plugins={[gfm]}
        linkTarget="_blank"
        renderers={renderers}
        children={props.content.markdown.default} />
    </section>
  )
}
export default Desc
