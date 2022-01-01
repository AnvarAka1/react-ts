import React from 'react'
import { useParams } from 'react-router-dom'

import WorklanceLayout from 'src/layouts/WorklanceLayout'
import { projectList } from 'src/mock/project'

import ProjectDetail from '../components/ProjectDetail'

function ProjectDetailContainer () {
  const { id } = useParams<{ id: string }>()
  const intId = parseInt(id)
  const project = projectList[intId]
  const mockDetail = { isLoading: false, result: project }

  const title = project.name

  const isLoading = mockDetail.isLoading

  return (
    <WorklanceLayout title={title}>
      <ProjectDetail
        isLoading={isLoading}
        detail={mockDetail.result}
      />
    </WorklanceLayout>
  )
}

export default ProjectDetailContainer
