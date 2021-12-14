import React from 'react'
import Grid from '@mui/material/Grid'

import { categoryList } from 'src/mock/categories'
import PageContainer from 'src/components/PageContainer'
import Heading from 'src/components/Heading'
import { FreelancerType } from 'src/types'

import FreelancerCard from './FreelancerCard'
import FreelancerCategories from './FreelancerCategories'

type Props = {
  readonly list: {
    isLoading: boolean
    results: FreelancerType[]
  }
}

function FreelancerList ({ list }: Props) {
  return (
    <PageContainer>
      <Grid container={true} spacing={3}>
        <Grid item={true} lg={3}>
          <Heading>Категории</Heading>
          <FreelancerCategories categories={categoryList} />
        </Grid>
        <Grid item={true} lg={6}>
          <Heading>Исполнители</Heading>
          <Grid container={true} spacing={2}>
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
