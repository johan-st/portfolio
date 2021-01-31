import React from 'react'
import { Disk } from '..'
import { Link } from 'react-router-dom'
import './Stack.css'

type StackProps = {
  content: Content[]
}
const Stack = (props: StackProps) => {
  const numOfDisks = props.content.length
  return (
    <section className="stack" style={{
      height: numOfDisks * 75 + 80 + 'px'
    }}>
      <Link className="stack__link" to={'/stack'}>
        <h3 className="stack__headline" >this stack</h3>
      </Link>
      {
        props.content.map((c: Content, i: number): JSX.Element => {
          return (<Disk key={c.title + "_disk"} active={false} path={"/stack" + c.path} index={i}>{c.title}</Disk>)
        })
      }
    </section >
  )
}

export default Stack
