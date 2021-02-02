import React from 'react'
import './Project.css'
import { Link, useRouteMatch } from 'react-router-dom'

type ProjectProps = {
  project: Project
}
const Project = (props: ProjectProps) => {
  const match = useRouteMatch();
  return (
    <Link className="project" to={match.path + props.project.path} style={{ backgroundImage: `url(${props.project.thumb})` }}>
      <div className="project__card">
        <h2 className="project__heading">{props.project.title}</h2>
        <p className="project__short">{props.project.short}</p>
        <p className="project__info">click to explore</p>
      </div>
    </Link>)
}

export default Project
