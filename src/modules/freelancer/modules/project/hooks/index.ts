import { generatePath } from 'react-router-dom'

import { useCreate, useDelete, useDetail, useList } from 'src/api/crud'
import { ProjectType } from 'src/types'
import * as API from 'src/constants/api-freelancer'
import { RequestDialogFieldTypes } from 'src/modules/freelancer/modules/project/types'

export const useProjectList = () => {
  return useList<ProjectType>(API.PROJECT_LIST)
}

export const useProjectDetail = (id: string) => {
  const url = generatePath(API.PROJECT_DETAIL, { id })
  return useDetail<ProjectType>(url)
}

export const useProjectRequestSend = (id: string) => {
  const url = generatePath(API.PROJECT_REQUEST_SEND, { id })
  const { create, ...state } = useCreate<RequestDialogFieldTypes, null>(url)

  return { ...state, send: create }
}

export const useProjectRequestCancel = (id: string) => {
  const url = generatePath(API.PROJECT_REQUEST_CANCEL, { id })
  const { remove, ...state } = useDelete(url)

  return { ...state, cancel: remove }
}
