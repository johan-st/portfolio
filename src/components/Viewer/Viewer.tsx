import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Desc, Stack } from '..'
import { defaultContent } from '../../content'

type ViewerProps = {
  content: Content[]
  defaultContent: Content
}

const Viewer = (props: ViewerProps) => (
  <>
    <Switch>
      < Route exact path='/' render={
        (rProps) => <Desc {...rProps} content={defaultContent} />
      } />
      {props.content.map(c =>
        <Route exact path={c.path} render={
          (rProps) => <Desc {...rProps} content={c} />
        } />
      )}
    </Switch>
    <Stack content={props.content} />

  </>
)

export default Viewer
