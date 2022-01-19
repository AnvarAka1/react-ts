import { ProjectType } from 'src/types'

export type SelectedProjectsType = {
  readonly projects: ProjectType[]
}

export type ProjectIdsDTO = {
  ids: number[]
}
