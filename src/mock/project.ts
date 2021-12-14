import { ProjectType } from 'src/types'

import { freelancerList } from './freelancer'

export const projectList: ProjectType[] = [
  {
    id: 1,
    name: 'Создать Лединг страницу для компании',
    status: 'inProgress',
    freelancers: null
  },
  {
    id: 2,
    name: 'Верстка сайта в HTML, CSS, JS',
    status: 'completed',
    freelancers: null
  },
  {
    id: 3,
    name: 'Верстка сайта в HTML, CSS, JS',
    status: 'inProgress',
    freelancers: freelancerList
  },
]
