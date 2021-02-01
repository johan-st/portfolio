import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Desc, Stack } from '..'
import './StackViewer.css'

type StackViewerProps = {
  stack: StackContent
}

const StackViewer = (props: StackViewerProps) => {
  const match = useRouteMatch();

  return (
    <div className="stackViewer">
      <Switch>
        < Route exact path={match.url} render={
          (rProps) => <Desc {...rProps} content={props.stack.overview} />
        } />
        {props.stack.content.map(c =>
          <Route key={c.title + "_route"} exact path={match.url + c.path} render={
            (rProps) => <Desc {...rProps} content={c} />
          } />
        )}
      </Switch>
      <Stack content={props.stack.content} />
    </div>
  )
}
export default StackViewer
