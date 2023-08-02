import { useNotification } from '@/components/useNotification'
import { useQuery } from '@tanstack/react-query'
import { Api } from '../api'

const api = new Api()

export function useGetUsers() {
  const { notify } = useNotification()
  return useQuery({
    queryKey: ['query-get-users'],
    queryFn: () => api.getUser(),
    // onSuccess: (data) => {
    //   if (data?.status === 200) {
    //     return Promise.resolve({ type: 'success', data })
    //   }
    //   return notify.error({
    //     title: 'parece que ha ocurrido un error inesperado!'
    //   })
    // },
    // onError: (error, variables, context) => {
    //   console.log('exts error', [error, variables, context])
    //   return notify.error({
    //     title: 'parece que ha ocurrido un error inesperado!'
    //   })
    // }
  })
}
