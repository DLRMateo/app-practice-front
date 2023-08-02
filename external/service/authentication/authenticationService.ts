/* eslint-disable indent */
import { errorResponse, responseGeneric, signinRequest } from '@/external/entity'
import { AxiosResponse } from 'axios'

import { http } from '../../api'
import { formSignin } from '@/types'

export interface IAuthentication {
  signin(
    request: formSignin
  ): Promise<AxiosResponse<{message: string}, errorResponse>>
  getUser(
  ): Promise<AxiosResponse<formSignin, errorResponse>>
}

export class AuthenticationService implements IAuthentication {
  async signin(
    request: formSignin
  ): Promise<AxiosResponse<{message: string}, errorResponse>> {
      return http('SIGNIN').post<responseGeneric>('/auth/register', request)
  }
  async getUser(
  ): Promise<AxiosResponse<formSignin, errorResponse>> {
      return http('SIGNIN').get<formSignin>('/users')
  }
}
