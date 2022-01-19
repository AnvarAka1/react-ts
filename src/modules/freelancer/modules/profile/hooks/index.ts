import * as API_FREELANCER from 'src/constants/api-freelancer'
import { useUpdate, useDetail } from 'src/api/crud'
import { FreelancerType } from 'src/types'

import { PasswordUpdateType } from '../types'

export const useProfileDetail = () => {
  return useDetail<FreelancerType>(API_FREELANCER.PROFILE_DETAIL)
}

export const useProfileGeneralUpdate = () => {
  return useUpdate<FreelancerType>(API_FREELANCER.PROFILE_GENERAL_UPDATE)
}

export const useProfileSecurityUpdate = () => {
  return useUpdate<PasswordUpdateType>(API_FREELANCER.PROFILE_SECURITY_UPDATE)
}
