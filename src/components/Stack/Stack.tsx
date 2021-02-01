import React from 'react'
import { Disk } from '..'
import { useLocation, useRouteMatch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'
import './Stack.css'

type StackProps = {
  stack: Project
}
const Stack = (props: StackProps) => {
  const numOfDisks = props.stack.content.length
  const path = useLocation().pathname.split("/").reverse()[0];
  const match = useRouteMatch();

  console.log();


  return (
    <section className="stack" style={{
      height: numOfDisks * 75 + 80 + 'px'
    }}>

      <Link className="stack__link" onClick={() => scroller.scrollTo("desc", {})} to={match.path}>
        <h3 className="stack__headline" >stack</h3>
      </Link>
      {
        props.stack.content.map((c: Content, i: number): JSX.Element => {
          return (<Disk key={c.title + "_disk"} active={"/" + path === c.path ? true : false} path={match.url + c.path} index={i}>{c.title}</Disk>)
        })
      }
    </section >
  )
}

export default Stack
