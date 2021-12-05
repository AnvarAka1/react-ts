import React from 'react'
import { Route, Switch } from "react-router-dom"
import { RouteType } from 'src/types'

interface Props {
  readonly routes: RouteType[]
}


function Routes ({ routes }: Props) {
  return (
    <Switch>
      {routes.map((route: RouteType) => (
        <Route
          exact={true}
          key={route.path}
          path={route.path}
          render={() => (
            <route.layout>
              <route.component />
            </route.layout>
          )}
        />
      ))}
    </Switch>
  )
}

export default Routes
