import React from 'react'
import './Stack.css'
import { Disk } from '..'
type StackProps = {
  content: Content[]
}

const Stack = (props: StackProps) => {
  return (
    <section className="stack">
      <a className="stack__link" href="http://github.com/johan-st/portfolio" target="_blank" rel="noopener noreferrer">
        <h3 className="stack__headline" >this stack</h3>
      </a>

      {
        props.content.map((c: Content): JSX.Element => {
          return (<Disk active={false} path={c.path}>{c.title}</Disk>)
        })
      }
    </section >
  )
}

export default Stack
