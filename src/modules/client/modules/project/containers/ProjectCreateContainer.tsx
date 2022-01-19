import React from 'react'

import { WorklanceLayout } from 'src/layouts'

import { ProjectCreateType } from '../types'
import ProjectCreate from '../components/ProjectCreate'
import { useProjectCreate } from '../hooks'

function ProjectCreateContainer () {
  const projectCreate = useProjectCreate()

  const handleSubmit = (values: ProjectCreateType) =>
    projectCreate.create(values)

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
