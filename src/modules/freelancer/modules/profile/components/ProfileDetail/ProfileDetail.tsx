import React from 'react'
import Grid from '@mui/material/Grid'

import PageContainer from 'src/components/PageContainer'
import { FreelancerType } from 'src/types'

import ProfileGeneral from './ProfileGeneral'
import ProfileSecurity from './ProfileSecurity'

type Props = {
  readonly detail: FreelancerType
  readonly onGeneralSubmit: (values: FreelancerType) => void
  readonly onSecuritySubmit: (values: FreelancerType) => void
}

function ProfileDetail ({ detail, onGeneralSubmit, onSecuritySubmit }: Props) {
  return (
    <PageContainer>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} lg={5}>
          <ProfileGeneral initialValues={detail} onSubmit={onGeneralSubmit} />
        </Grid>
        <Grid item={true} xs={12} lg={5}>
          <ProfileSecurity initialValues={detail} onSubmit={onSecuritySubmit} />
        </Grid>
      </Grid>

    </PageContainer>
  )
}

export default ProfileDetail
