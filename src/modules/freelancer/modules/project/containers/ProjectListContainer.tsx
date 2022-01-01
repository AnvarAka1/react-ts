import React from 'react'

import WorklanceLayout from 'src/layouts/WorklanceLayout'
import { projectList } from 'src/mock/project'

import ProjectList from '../components/ProjectList'

function ProjectListContainer () {
  const mockList = { isLoading: false, results: projectList, count: 6 }

  return (
    <WorklanceLayout title="Проекты">
      <ProjectList
        list={mockList}
      />
    </WorklanceLayout>
  )
}

export default ProjectListContainer
