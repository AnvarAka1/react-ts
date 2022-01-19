import { useCreate } from 'src/api/crud'
import * as API from 'src/constants/api-client'
import { ProjectType } from 'src/types'

import { ProjectCreateType } from '../types'

export const useProjectCreate = () => {
  return useCreate<ProjectCreateType, ProjectType>(API.PROJECT_CREATE)
}
