import authRoutes from './auth'

const rootRoutes = () => [
  ...authRoutes()
]

export default rootRoutes
