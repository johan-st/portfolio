import React from 'react'
import { Desc } from "..";
import './MD.css'
type MDProps = {
  content: Content
}

const MD = (props: MDProps) => {
  return (
    <article className="markdown">
      <Desc content={props.content} />
    </article>
  )
}

export default MD
