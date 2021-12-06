import authRoutes from './auth'
import clientRoutes from './client'
import freelancerRoutes from './freelancer'

const rootRoutes = () => [
  ...authRoutes(),
  ...clientRoutes(),
  ...freelancerRoutes()
]

export default rootRoutes
