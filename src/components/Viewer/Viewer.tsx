import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { MD, Projects } from '..'


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
        (_) => <MD content={props.content.about} />
      } />
    </Switch>
  </>
)

export default Viewer
