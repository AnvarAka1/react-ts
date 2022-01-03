import * as ROUTES from 'src/constants/routes'
import { AuthLayout } from 'src/layouts'

import ProfileDetailContainer from './containers/ProfileDetailContainer'

export default () => [
  {
    component: ProfileDetailContainer,
    layout: AuthLayout,
    path: ROUTES.PROFILE_DETAIL_PATH,
  }
]
