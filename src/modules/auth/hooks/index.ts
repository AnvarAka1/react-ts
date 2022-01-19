import { useCreate } from 'src/api/crud'
import * as API from 'src/constants/api'

import { SignInRequestDTO, SignInResponseDTO } from '../types'

export const useSignIn = () => {
  return useCreate<SignInRequestDTO, SignInResponseDTO>(API.SIGN_IN)
}
