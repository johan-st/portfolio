import React from 'react'
import './Disk.css'
type DiskProps = {
  children: string,
  active: boolean
}
function Disk(props: DiskProps): JSX.Element {
  let classes = "stack__disk"
  classes += props.active ? " stack__disk--active " : ""

  return (
    <div className={classes}>
      <svg width="200" height="100">
        <ellipse
          cx="100" cy="78"
          rx="98" ry="20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="#333" />
        <polygon
          points="2 78, 2 24, 198 24, 198 78"
          stroke="white"
          strokeDasharray="304"
          strokeWidth="2"
          strokeLinecap="round"
          fill="#333" />
        <ellipse
          cx="100" cy="24"
          rx="98" ry="20"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          fill="#333" />
        <path id="curve" fill="none" stroke="none" d="M 0 30 A 98 30 0 0 0 200 65 " />
        <text width="500">
          <textPath startOffset="155" fill="white" textAnchor="middle"
            dominantBaseline="top" href="#curve">
            {props.children}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default Disk
