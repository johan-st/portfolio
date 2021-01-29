import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Desc, Stack } from '..'

type ViewerProps = {
  content: Content[]
  defaultContent: Content
}

const Viewer = (props: ViewerProps) => (
  <>
    <Switch>
      < Route exact path='/' render={
        (rProps) => <Desc {...rProps} content={props.defaultContent} />
      } />
      {props.content.map(c =>
        <Route key={c.title + "_route"} exact path={c.path} render={
          (rProps) => <Desc {...rProps} content={c} />
        } />
      )}
      <Route key={"404_route"} path="*" render={
        (rProps) => <Desc {...rProps} content={props.defaultContent} />
      } />
    </Switch>
    <Stack content={props.content} />
  </>
)

export default Viewer
