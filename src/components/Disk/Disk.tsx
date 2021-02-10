import React from 'react'
import { Link } from 'react-router-dom'
// import { animateScroll as scroll } from 'react-scroll'
import { scroller } from 'react-scroll'
import './Disk.css'

type DiskProps = {
  children: string
  path: string
  index: number
  active: boolean
}


function Disk(props: DiskProps): JSX.Element {
  let diskClass = props.active ? "stack__disk stack__disk--active" : "stack__disk"
  let textClass = props.active ? "stack__disk-textpath     stack__disk-textpath--active" : "stack__disk-textpath"
  let linkClass = props.active ? "stack__disk-link stack__disk-link--active" : "stack__disk-link"
  return (

    <li onClick={() => scroller.scrollTo("stackViewer", {
      duration: 333,
      delay: 0,
      smooth: 'easeOutQuart'
    })}
      className={diskClass}
      style={{
        bottom: props.index * 30,
        zIndex: 100 - props.index
      }}>
      <Link className={linkClass} to={props.path}>
        <svg className="stack__disk-svg" >
          <ellipse
            cx="100" cy="78"
            rx="98" ry="20"
            stroke="var(--clr-disk)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="var(--clr-bg)" />
          <polygon
            points="2 78, 2 24, 198 24, 198 78"
            stroke="var(--clr-disk)"
            strokeDasharray="304"
            strokeWidth="2"
            strokeLinecap="round"
            fill="var(--clr-bg)" />
          <ellipse
            cx="100" cy="24"
            rx="98" ry="20"
            stroke="var(--clr-disk)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="var(--clr-bg)" />
          <path id="curve" fill="none" stroke="none" d="M 0 30 A 98 30 0 0 0 200 65" />
          <text className={textClass} width="500">
            <textPath startOffset="150" textAnchor="middle"
              dominantBaseline="top" href="#curve">
              {props.children}
            </textPath>
          </text>
        </svg>
      </Link>
    </li >
  )
}

export default Disk
