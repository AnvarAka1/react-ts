import SignInContainer from './containers/SignInContainer'
import BlankLayout from 'src/layouts/BlankLayout'
import * as ROUTES from 'src/constants/routes'

const authRoutes = () => [
  {
    container: SignInContainer,
    layout: BlankLayout,
    route: ROUTES.SIGN_IN_PATH
  }
]

export default authRoutes
