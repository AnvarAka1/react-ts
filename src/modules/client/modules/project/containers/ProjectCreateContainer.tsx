import React from 'react'

import { WorklanceLayout } from 'src/layouts'
import { ProjectType } from 'src/types'

import ProjectCreate from '../components/ProjectCreate'

function ProjectCreateContainer () {
  const handleSubmit = (values: ProjectType) => {

  }

  return (
    <WorklanceLayout title="Профиль">
      <ProjectCreate
        initialValues={{}}
        onSubmit={handleSubmit}
      />
    </WorklanceLayout>
  )
}

export default ProjectCreateContainer
