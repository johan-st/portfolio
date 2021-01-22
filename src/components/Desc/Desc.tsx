import React from 'react'
import './Desc.css'
type DescProps = {
  content: Content
}


const Desc = (props: DescProps): JSX.Element => {
  return (
    <section className="description">
      <h3>{props.content.title}</h3>
      <p> {props.content.desc}
      </p>
    </section>
  )
}
export default Desc
