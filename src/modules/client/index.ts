import freelancerRoutes from './modules/freelancer'
import projectRoutes from './modules/project'

export default () => [
  ...freelancerRoutes(),
  ...projectRoutes()
]
