import React from 'react'
import { Desc } from "..";
import './Main.css'
type MainProps = {
  content: Content
}

const Main = (props: MainProps) => {
  return (
    <article className="main">
      <Desc content={props.content} />
    </article>
  )
}

export default Main
