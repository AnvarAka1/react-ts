import * as ROUTES from 'src/constants/routes'
import { AuthLayout } from 'src/layouts'

import ProjectCreateContainer from './containers/ProjectCreateContainer'

export default () => [
  {
    component: ProjectCreateContainer,
    layout: AuthLayout,
    path: ROUTES.PROJECT_CREATE_PATH,
  }
]
