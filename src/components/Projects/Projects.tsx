import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { StackViewer, Project } from '..'
import './Projects.css'

type ProjectsProps = {
  projects: Project[]
}

const Projects = (props: ProjectsProps) => {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        {props.projects.map(p => {
          return (< Route key={p.title + "_route"} path={match.path + p.path} render={
            (rProps) => <StackViewer {...rProps} stack={p} />
          } />)
        })}
        < Route path={match.path} render={
          (rProps) =>
          (<div className="projects">
            {props.projects.map(p => <Project key={p.title} project={p} />)}

          </div>)} />
      </Switch>
    </>
  )
}
export default Projects
