import React from 'react'
import PageContainer from 'src/components/PageContainer'
import Grid from '@mui/material/Grid'
import Heading from 'src/components/Heading'
import FreelancerCard from 'src/modules/client/modules/freelancer/components/FreelancerList/FreelancerCard'
import { Freelancer } from 'src/types'

type Props = {
  readonly list: {
    isLoading: boolean
    results: Freelancer[]
  }
}

function FreelancerList ({ list }: Props) {
  return (
    <PageContainer>
      <Grid container={true}>
        <Grid item={true} lg={3}>
          <Heading>Категории</Heading>
        </Grid>
        <Grid item={true} lg={6}>
          <Heading>Исполнители</Heading>
          <Grid container={true} spacing={3}>
            {list.results.map(freelancer => (
              <Grid key={freelancer.id} item={true} xs={12}>
                <FreelancerCard freelancer={freelancer} />
              </Grid>
            ))}
          </Grid>

        </Grid>
        <Grid item={true} lg={3}>
          <Heading>Мои проекты</Heading>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default FreelancerList
