import React from 'react'

export interface RouteType {
  component: () => JSX.Element,
  layout: ({ children }: { children: React.ReactNode }) => JSX.Element,
  path: string
}
