import * as ROUTES from 'src/constants/routes'
import { AuthLayout } from 'src/layouts'

import SignInContainer from './containers/SignInContainer'
import SignUpContainer from './containers/SignUpContainer'

const authRoutes = () => [
  {
    component: SignInContainer,
    layout: AuthLayout,
    path: ROUTES.SIGN_IN_PATH,
  },
  {
    component: SignUpContainer,
    layout: AuthLayout,
    path: ROUTES.SIGN_UP_PATH,
  },
]

export default authRoutes
