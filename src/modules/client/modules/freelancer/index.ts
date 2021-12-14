import * as ROUTES from 'src/constants/routes'
import { AuthLayout } from 'src/layouts'

import FreelancerListContainer from './containers/FreelancerListContainer'

export default () => [
  {
    component: FreelancerListContainer,
    layout: AuthLayout,
    path: ROUTES.FREELANCER_LIST,
  }
]
