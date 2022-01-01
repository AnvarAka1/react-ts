import React from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useHistory } from 'react-router-dom'

import { categoryList } from 'src/mock/categories'
import PageContainer from 'src/components/PageContainer'
import Heading from 'src/components/Heading'
import { ProjectType } from 'src/types'
import * as ROUTES from 'src/constants/routes'
import MyProjects from 'src/components/MyProjects/MyProjects'
import { projectList } from 'src/mock/project'
import { ListType } from 'src/types/crud'

import ProjectCard from '../../components/ProjectList/ProjectCard'
import ProjectCategories from '../../components/ProjectList/ProjectCategories'

type Props = {
  readonly list: ListType<ProjectType>
}

function ProjectList ({ list }: Props) {
  const history = useHistory()
  const projects = list.results

  return (
    <PageContainer>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={12} lg={3}>
          <Heading>Категории</Heading>
          <ProjectCategories categories={categoryList} />
        </Grid>
        <Grid item={true} xs={12} lg={6}>
          <Heading>Исполнители</Heading>
          <Grid container={true} spacing={2}>
            {projects.map(project => (
              <Grid key={project.id} item={true} xs={12}>
                <ProjectCard project={project} />
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
              onClick={() => history.push(ROUTES.PROJECT_CREATE)}
            >
              + Создать команду
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

export default ProjectList
