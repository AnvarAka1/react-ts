import React from 'react'
import { generatePath } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import * as ROUTES from 'src/constants/routes'
import { ProjectType } from 'src/types'
import RouterLink from 'src/components/RouterLink'

import MyProject from './MyProject'

type Props = {
  readonly projects: ProjectType[]
}

function MyProjects ({ projects }: Props) {
  return (
    <Box>
      <Box display={'flex'} justifyContent={'flex-end'}>
        <RouterLink to={ROUTES.MY_PROJECT_LIST} underline={'hover'}>
          <Typography gutterBottom={true} variant={'caption'}>
            Посмотреть все
          </Typography>
        </RouterLink>
      </Box>

      {projects.map(project => {
        const path = generatePath(ROUTES.PROJECT_DETAIL, { id: project.id })

        return (
          <MyProject key={project.id} project={project} path={path} />
        )
      })}
    </Box>
  )
}

export default MyProjects
