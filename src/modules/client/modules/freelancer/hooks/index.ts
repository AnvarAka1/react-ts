import { generatePath } from 'react-router-dom'

import { useDelete, useCreate, useDetail, useList } from 'src/api/crud'
import * as API from 'src/constants/api-client'
import { FreelancerType, ProjectType } from 'src/types'

import { ProjectIdsDTO } from '../types'

export const useFreelancerList = () => {
  return useList<FreelancerType>(API.FREELANCER_LIST)
}

export const useFreelancerDetail = (id: string) => {
  const url = generatePath(API.FREELANCER_DETAIL, { id })
  return useDetail<FreelancerType>(url)
}

export const useFreelancerProjectList = (id: string) => {
  const url = generatePath(API.FREELANCER_PROJECT_LIST, { id })
  return useList<ProjectType>(url)
}

export const useMyProjectList = () => {
  return useList<ProjectType>(API.MY_PROJECT_LIST)
}

export const useMyProjectsRequestSend = (id: string) => {
  const url = generatePath(API.PROJECTS_REQUEST_SEND, { id })
  return useCreate<ProjectIdsDTO, null>(url)
}

export const useMyProjectsRequestCancel = (id: string) => {
  const url = generatePath(API.PROJECTS_REQUEST_DELETE, { id })
  return useDelete(url)
}
