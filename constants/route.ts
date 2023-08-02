import { RoutePages } from '@/types'

const route: RoutePages = {
  home: '/',
  Authentication: {
    signin: '/Authentication/registrarse',
    login: '/Authentication/ingresar'
  },
  customerManagement: '/gestion-clientes'
}

// const listPagesPublic: string[] = [
//   route.signin
// ]

// const listPagesPrivate = ['lorem']

export { route }
