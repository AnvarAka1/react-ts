import { ProjectType } from 'src/types'

export type ProjectCreateType = Omit<ProjectType, 'id' | 'createdDate' | 'updatedDate'>
