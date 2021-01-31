import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { StackViewer, Main } from '..'


type ViewerProps = {
  content: ContentModel
}

const Viewer = (props: ViewerProps) => (
  <>
    <Switch>
      < Route path='/stack' render={
        (rProps) => <StackViewer {...rProps} stack={props.content.stack} />
      } />
      <Route path='/' render={
        (_) => <Main content={props.content.other[0]} />
      } />
    </Switch>
  </>
)

export default Viewer
