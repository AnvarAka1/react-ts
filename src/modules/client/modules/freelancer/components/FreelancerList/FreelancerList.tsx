import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useHistory } from 'react-router-dom'

import { categoryList } from 'src/mock/categories'
import PageContainer from 'src/components/PageContainer'
import Heading from 'src/components/Heading'
import { FreelancerType } from 'src/types'
import * as ROUTES from 'src/constants/routes'
import MyProjects from 'src/components/MyProjects/MyProjects'
import { projectList } from 'src/mock/project'
import { ListType } from 'src/types/crud'

import FreelancerCard from './FreelancerCard'
import FreelancerCategories from './FreelancerCategories'

type Props = {
  readonly list: ListType<FreelancerType>
}

function FreelancerList ({ list }: Props) {
  const history = useHistory()
  const freelancers = list.results

  return (
    <PageContainer>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} lg={3}>
          <Heading>Категории</Heading>
          <FreelancerCategories categories={categoryList} />
        </Grid>
        <Grid item={true} xs={12} lg={6}>
          <Heading>Исполнители</Heading>
          <Grid container={true} spacing={2}>
            {freelancers.map(freelancer => (
              <Grid key={freelancer.id} item={true} xs={12}>
                <FreelancerCard freelancer={freelancer} />
              </Grid>
            ))}
          </Grid>

        </Grid>
        <Grid item={true} xs={12} lg={3}>
          <Box>
            <Button
              type={'button'}
              variant={'outlined'}
              color={'primary'}
              fullWidth={true}
              onClick={() => history.push(ROUTES.PROJECT_CREATE_PATH)}
            >
              + Создать проект
            </Button>
            <Box sx={{ mt: 3 }}>
              <MyProjects projects={projectList} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default FreelancerList
