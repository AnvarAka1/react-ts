import * as ROUTES from 'src/constants/routes'
import { AuthLayout } from "src/layouts"

import SignInContainer from './containers/SignInContainer'

const authRoutes = () => [
  {
    component: SignInContainer,
    layout: AuthLayout,
    path: ROUTES.SIGN_IN_PATH,
  }
]

export default authRoutes
