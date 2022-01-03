import React from 'react'
import { useParams } from 'react-router-dom'

import WorklanceLayout from 'src/layouts/WorklanceLayout'
import { projectList } from 'src/mock/project'

import ProjectDetail from '../components/ProjectDetail'
import { RequestDialogFieldTypes } from '../types'

function ProjectDetailContainer () {
  const { id } = useParams<{ id: string }>()
  const intId = parseInt(id)
  const project = projectList[intId]
  const mockDetail = { isLoading: false, result: project }

  const title = project.name

  const isLoading = mockDetail.isLoading

  const handleRequestSend = async (values: RequestDialogFieldTypes) => {
  }

  const handleRequestCancel = async () => {}

  return (
    <WorklanceLayout title={title}>
      <ProjectDetail
        isLoading={isLoading}
        detail={mockDetail.result}
        onRequestSend={handleRequestSend}
        onRequestCancel={handleRequestCancel}
      />
    </WorklanceLayout>
  )
}

export default ProjectDetailContainer
