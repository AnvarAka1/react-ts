import profileRoutes from './modules/profile'
import projectRoutes from './modules/project'

const freelancerRoutes = () => [
  ...profileRoutes(),
  ...projectRoutes()
]

export default freelancerRoutes
