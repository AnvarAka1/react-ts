import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

import { FreelancerType, ProjectType } from 'src/types'
import PageContainer from 'src/components/PageContainer'

import FreelancerCard from './FreelancerCard'
import ProjectsCard from './ProjectsCard'
import GeneralInfoCard from './GeneralInfoCard'

type Props = {
  readonly isLoading: boolean
  readonly detail: FreelancerType
  readonly projectList: ProjectType[]
}

function FreelancerDetail ({ isLoading, detail, projectList }: Props) {
  return (
    <PageContainer>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} lg={8}>
          <Box mb={2}>
            {!isLoading && <FreelancerCard freelancer={detail} />}
          </Box>
          <Box>
            <ProjectsCard projects={projectList} />
          </Box>
        </Grid>
        <Grid item={true} xs={12} lg={4}>
          <GeneralInfoCard freelancer={detail} />
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default FreelancerDetail
