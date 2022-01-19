import React from 'react'
import { useParams } from 'react-router-dom'

import WorklanceLayout from 'src/layouts/WorklanceLayout'

import ProjectDetail from '../components/ProjectDetail'
import { RequestDialogFieldTypes } from '../types'
import { useProjectDetail, useProjectRequestCancel, useProjectRequestSend } from '../hooks'

function ProjectDetailContainer () {
  const { id } = useParams<{ id: string }>()
  const projectDetail = useProjectDetail(id)
  const projectRequestSend = useProjectRequestSend(id)
  const projectRequestCancel = useProjectRequestCancel(id)

  const title = projectDetail.detail?.name

  const isLoading = projectDetail.isLoading

  const handleRequestSend = async (values: RequestDialogFieldTypes) =>
    projectRequestSend.send(values)

  const handleRequestCancel = async () =>
    projectRequestCancel.cancel()

  return (
    <WorklanceLayout title={title}>
      <ProjectDetail
        isLoading={isLoading}
        detail={projectDetail.detail}
        onRequestSend={handleRequestSend}
        onRequestCancel={handleRequestCancel}
      />
    </WorklanceLayout>
  )
}

export default ProjectDetailContainer
