import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { StackViewer, Main } from '..'


type ViewerProps = {
  content: ContentModel
}

const Viewer = (props: ViewerProps) => (
  <>
    <Switch>
      < Route path={props.content.portfolio.path} render={
        (rProps) => <StackViewer {...rProps} stack={props.content.portfolio} />
      } />
      < Route path={props.content.contact.path} render={
        (rProps) => <Main {...rProps} content={props.content.contact} />
      } />
      < Route path={'/projects'} render={
        (rProps) => <Main {...rProps} content={props.content.about} />
      } />
      <Route path='/' render={
        (_) => <Main content={props.content.about} />
      } />
    </Switch>
  </>
)

export default Viewer
