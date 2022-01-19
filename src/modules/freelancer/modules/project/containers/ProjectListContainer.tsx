import React from 'react'

import WorklanceLayout from 'src/layouts/WorklanceLayout'

import ProjectList from '../components/ProjectList'
import { useProjectList } from '../hooks'

function ProjectListContainer () {
  const projectList = useProjectList()

  return (
    <WorklanceLayout title="Проекты">
      <ProjectList list={projectList} />
    </WorklanceLayout>
  )
}

export default ProjectListContainer
