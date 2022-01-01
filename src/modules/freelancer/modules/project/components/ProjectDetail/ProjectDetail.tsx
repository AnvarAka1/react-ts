import React from 'react'
import Grid from '@mui/material/Grid'

import { ProjectType } from 'src/types'
import PageContainer from 'src/components/PageContainer'

import ProjectCard from './ProjectCard'
import GeneralInfoCard from './GeneralInfoCard'

type Props = {
  readonly isLoading: boolean
  readonly detail: ProjectType
}

function ProjectDetail ({ isLoading, detail }: Props) {
  return (
    <PageContainer>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} lg={8}>
          {!isLoading && <ProjectCard project={detail} />}
        </Grid>
        <Grid item={true} xs={12} lg={4}>
          <GeneralInfoCard
            project={detail}
          />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default ProjectDetail
