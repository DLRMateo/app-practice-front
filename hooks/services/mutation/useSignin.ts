import { useMutation } from '@tanstack/react-query'

import { useNotification } from '@/components/useNotification'
import { formSignin } from '@/types'
import { Api } from '../api'

const api = new Api()

export function useSignin(data: formSignin) {
  const { notify } = useNotification()
  return useMutation({
    mutationKey: ['mutation-signin', data],
    mutationFn: (data: formSignin) => api.signin(data),
    onSuccess: (data) => {
      if (data?.status === 200) {
        return Promise.resolve({ type: 'success', data })
      }
      return notify.error({
        title: 'parece que ha ocurrido un error inesperado!'
      })
    },
    onError: (error, variables, context) => {
      console.log('exts error', [error, variables, context])
      return notify.error({
        title: 'parece que ha ocurrido un error inesperado!'
      })
    }
  })
}