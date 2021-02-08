import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MD, Projects, E404, StackViewer } from '..'


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
      <Route path='/stack' render={
        (rProps) => <StackViewer {...rProps} project={props.content.about} />
      } />
      <Route exact path='/' render={
        (rProps) => <Redirect to="/stack" />
      } />
      <Route path='/' render={
        (rProps) => <E404 />
      } />
    </Switch>
  </>
)

export default Viewer
