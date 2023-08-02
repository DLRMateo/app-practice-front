type Route = {
  title: string
  route: string
  subRoutes: string[]
}

type RoutePages = {
  home: string
  Authentication: {
    signin: string
    login: string
  },
  customerManagement: string
}

export type { RoutePages, Route }