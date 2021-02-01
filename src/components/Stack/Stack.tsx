import React from 'react'
import { Disk } from '..'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'
import './Stack.css'

type StackProps = {
  content: Content[]
}
const Stack = (props: StackProps) => {
  const numOfDisks = props.content.length
  const path = useLocation().pathname.split("/").reverse()[0];
  console.log();


  return (
    <section className="stack" style={{
      height: numOfDisks * 75 + 80 + 'px'
    }}>

      <Link className="stack__link" onClick={() => scroller.scrollTo("desc", {})} to={'/stack'}>
        <h3 className="stack__headline" >this stack</h3>
      </Link>
      {
        props.content.map((c: Content, i: number): JSX.Element => {
          return (<Disk key={c.title + "_disk"} active={"/" + path === c.path ? true : false} path={"/stack" + c.path} index={i}>{c.title}</Disk>)
        })
      }
    </section >
  )
}

export default Stack
