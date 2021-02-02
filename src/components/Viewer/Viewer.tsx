import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MD, Projects, StackViewer } from '..'


type ViewerProps = {
  content: ContentModel
}

const Viewer = (props: ViewerProps) => (
  <>
    <Switch>
      < Route path={"/projects"} render={
        (rProps) => <Projects {...rProps} projects={props.content.projects} />
      } />
      < Route path={props.content.contact.path} render={
        (rProps) => <MD {...rProps} content={props.content.contact} />
      } />

      <Route path='/' render={
        (rProps) => <StackViewer {...rProps} stack={props.content.about} />
      } />
    </Switch>
  </>
)

export default Viewer
