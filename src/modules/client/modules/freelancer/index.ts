import * as ROUTES from 'src/constants/routes'
import { AuthLayout } from 'src/layouts'

import FreelancerListContainer from './containers/FreelancerListContainer'
import FreelancerDetailContainer from './containers/FreelancerDetailContainer'

export default () => [
  {
    component: FreelancerDetailContainer,
    layout: AuthLayout,
    path: ROUTES.FREELANCER_DETAIL,
  },
  {
    component: FreelancerListContainer,
    layout: AuthLayout,
    path: ROUTES.FREELANCER_LIST
  }
]
