import { ReactNode } from 'react'

export interface RouteType {
  component: ReactNode,
  layout: ReactNode,
  path: string
}
