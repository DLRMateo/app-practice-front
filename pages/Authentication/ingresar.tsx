import { route } from '@/constants'
import { Layout, LayoutHydrated, Button } from '@/components'

import { ReactElement } from 'react'
import { useRouter } from 'next/router'

export default function Login(): JSX.Element {
  const router = useRouter()

  return (
    <div className='h-screen flex flex-col items-center justify-center border-2'>
      <div className='flex flex-col items-center justify-center border-gray-300 border rounded-md p-8 gap-4'>
         <input type="text" placeholder='usuario' />
         <input type="text" placeholder='contraseña' />
         <Button text='iniciar sesion' onClick={() => router.push(route.customerManagement)}></Button>
      </div>
    </div>
  )
}

Login.getLayout = (page: ReactElement) => (
  <LayoutHydrated>
    <Layout text='atras' backRoute={route.home}>
      {page}
    </Layout>
  </LayoutHydrated>
)
