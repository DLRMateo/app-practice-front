import { useRouter } from 'next/router'
import { route } from '@/constants'

import { Button } from '@/components'

export default function Home() {
  const router = useRouter()

  return (
    <div className='h-screen flex flex-col items-center justify-center border-2'>
      <div className='flex flex-col items-center justify-center border-gray-300 border rounded-md p-8 gap-4'>
          <Button onClick={() => router.push(route.Authentication.login)} text='iniciar sesion'></Button>
          <Button onClick={() => router.push(route.Authentication.signin)} text='registrarse'></Button>
      </div>
    </div>
  )
}
