import React from 'react'
import './Stack.css'
import { Disk } from '..'
type StackProps = {
  content: Content[]
}

const Stack = (props: StackProps) => {
  return (
    <section className="stack">
      <h3 className="stack__headline" >this stack</h3>
      {
        props.content.map((c: Content): JSX.Element => {
          return (<Disk active={false} path={c.path}>{c.title}</Disk>)
        })
      }
    </section>
  )
}

export default Stack
