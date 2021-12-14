import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { RouteType } from 'src/types'
import * as ROUTES from 'src/constants/routes'

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
      <Redirect to={ROUTES.FREELANCER_LIST} />
    </Switch>
  )
}

export default Routes
