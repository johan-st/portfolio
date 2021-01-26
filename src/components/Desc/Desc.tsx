import React from 'react'
import './Desc.css'
import ReactMarkdown from 'react-markdown'
type DescProps = {
  content: Content
}


const Desc = (props: DescProps): JSX.Element => {
  return (
    <section className="description">
      <h3>{props.content.title}</h3>
      <ReactMarkdown linkTarget="_blank">{props.content.markdown}</ReactMarkdown>
    </section>
  )
}
export default Desc
