export interface RouteType {
  component: (props: any) => JSX.Element,
  layout: ({ children }: any) => JSX.Element,
  path: string
}
