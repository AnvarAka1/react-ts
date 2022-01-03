import React from 'react'
import { generatePath } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import * as ROUTES from 'src/constants/routes'
import { ProjectType } from 'src/types'
import RouterLink from 'src/components/RouterLink'
import Heading from 'src/components/Heading'

import MyProject from './MyProject'

type Props = {
  readonly projects: ProjectType[]
}

function MyProjects ({ projects }: Props) {
  return (
    <Box>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Heading>Мои проекты</Heading>
        <RouterLink to={ROUTES.MY_PROJECT_LIST_PATH} underline={'hover'}>
          <Typography gutterBottom={true} variant={'caption'}>
            Посмотреть все
          </Typography>
        </RouterLink>
      </Box>

      {projects.map(project => {
        const path = generatePath(ROUTES.PROJECT_DETAIL_PATH, { id: project.id })

        return (
          <MyProject
            key={project.id}
            project={project}
            path={path}
          />
        )
      })}
    </Box>
  )
}

export default MyProjects
