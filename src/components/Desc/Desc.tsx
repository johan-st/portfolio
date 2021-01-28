import React from 'react'
import './Desc.css'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
type DescProps = {
  content: Content
}


const Desc = (props: DescProps): JSX.Element => {
  return (
    <section id="desc" className="description">
      <ReactMarkdown plugins={[gfm]} linkTarget="_blank">{props.content.markdown.default}</ReactMarkdown>
    </section>
  )
}
export default Desc
