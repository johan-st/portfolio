import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Desc, Stack } from '..'

type ViewerProps = {
  content: Content[]
}

const Viewer = (props: ViewerProps) => (
  <>
    <Switch>
      <Route exact path='/' render={
        (rProps) => <Desc {...rProps} content={{ title: "test", desc: props.content[0].desc }} />
      } />
      {/* <Route path='/schedule' component={Schedule} /> */}
    </Switch>
    <Stack content={props.content} />
  </>
)

export default Viewer
