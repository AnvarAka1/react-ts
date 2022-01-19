import { ProjectIdsDTO, SelectedProjectsType } from '../types'

export const projectRequestSerializer = ({ projects }: SelectedProjectsType) : ProjectIdsDTO => {
  const projectIds = projects.map(project => project.id)
  return { ids: projectIds }
}
