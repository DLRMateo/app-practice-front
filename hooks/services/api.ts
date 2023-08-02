import { AxiosResponse } from 'axios'

import {
  IAuthentication,
  AuthenticationService
} from '@/external/service/authentication/authenticationService'
import { errorResponse } from '@/external/entity'
import { formSignin } from '@/types'

export class Api implements IAuthentication {
  private sigin: IAuthentication

  constructor() {
    this.sigin = new AuthenticationService()
  }
  getUser(): Promise<AxiosResponse<formSignin, errorResponse>> {
    return this.sigin.getUser()
  }

  signin(request: formSignin): Promise<AxiosResponse<{ message: string; }, errorResponse>> {
    return this.sigin.signin(request)
  }

}