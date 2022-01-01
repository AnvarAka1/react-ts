import * as ROUTES from 'src/constants/routes'
import { AuthLayout } from 'src/layouts'

import ProjectListContainer from './containers/ProjectListContainer'
import ProjectDetailContainer from './containers/ProjectDetailContainer'

export default () => [
  {
    component: ProjectDetailContainer,
    layout: AuthLayout,
    path: ROUTES.PROJECT_DETAIL,
  },
  {
    component: ProjectListContainer,
    layout: AuthLayout,
    path: ROUTES.PROJECT_LIST
  }
]
