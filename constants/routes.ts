import { Route } from '@/types'
import { route } from './route'

const routes: Route[] = [
  {
    title: 'Home',
    route: route.home,
    subRoutes: []
  },
  {
    title: 'iniciar sesion',
    route: route.Authentication.signin,
    subRoutes: []
  },
  {
    title: 'iniciar sesion',
    route: route.Authentication.login,
    subRoutes: []
  },
  {
    title: 'iniciar sesion',
    route: route.customerManagement,
    subRoutes: []
  }
 
]

export { routes }
