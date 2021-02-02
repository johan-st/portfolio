import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Desc, Stack } from '..'
import './StackViewer.css'

type StackViewerProps = {
  project: Project
}

const StackViewer = (props: StackViewerProps) => {
  const match = useRouteMatch();

  return (
    <div className="stackViewer">
      <Switch>
        < Route exact path={match.url} render={
          (rProps) => <Desc {...rProps} content={props.project.overview} />
        } />
        {props.project.stack.map(c =>
          <Route key={c.title + "_route"} exact path={match.url + c.path} render={
            (rProps) => <Desc {...rProps} content={c} />
          } />
        )}
      </Switch>
      <Stack project={props.project} />
    </div>
  )
}
export default StackViewer
