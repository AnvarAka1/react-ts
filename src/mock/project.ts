import { ProjectType } from 'src/types'
import { ProjectStatusEnum } from 'src/enums'

import { freelancerList } from './freelancer'
import { clientList } from './client'

type _ProjectType = Omit<ProjectType, 'status'> & { status: string }

const _projectList: _ProjectType[] = [
  {
    id: 1,
    name: 'Создать Лединг страницу для компании',
    status: 'inProgress',
    freelancers: null,
    freelancer: null,
    client: clientList[0],
    review: {
      id: 1,
      rating: 5,
      comment: 'Great',
      user: freelancerList[0]
    }
  },
  {
    id: 2,
    name: 'Верстка сайта в HTML, CSS, JS',
    status: 'completed',
    freelancers: [],
    freelancer: null,
    review: {
      id: 2,
      rating: 2,
      comment: 'Hello',
      user: freelancerList[1]
    },
    client: clientList[0],
  },
  {
    id: 3,
    name: 'Верстка сайта в HTML, CSS, JS',
    status: 'inProgress',
    freelancers: freelancerList,
    freelancer: null,
    client: clientList[1],
  }
]

export const projectList: ProjectType[] = _projectList.map(project => {
  return {
    ...project,
    status: project.status as ProjectStatusEnum
  }
})
