import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { generatePath } from 'react-router-dom'
import { Divider } from '@mui/material'
import { path } from 'ramda'

import Heading from 'src/components/Heading'
import { ProjectType } from 'src/types'
import RouterLink from 'src/components/RouterLink'
import * as ROUTES from 'src/constants/routes'
import Stars from 'src/components/Stars'

type Props = {
  readonly projects: ProjectType[]
}

function ProjectsCard ({ projects }: Props) {
  return (
    <Card>
      <CardContent>
        <Heading>Проекты</Heading>
        {projects.map(project => {
          const id = project.id
          const clientId = project.client.id
          const name = project.client.fullName
          const role = project.client.role
          const reviewId = path(['review', 'id'], project) as number
          const rating = path(['review', 'rating'], project) as number

          const projectPath = generatePath(ROUTES.PROJECT_DETAIL_PATH, { id })
          const clientPath = generatePath(ROUTES.USER_DETAIL_PATH, { id: clientId, role })
          const reviewPath = reviewId
            ? generatePath(ROUTES.PROJECT_REVIEW_PATH, { id: reviewId })
            : ''

          return (
            <React.Fragment key={project.id}>
              <Box display="flex" justifyContent="space-between" pt={1}>
                <Box>
                  <RouterLink to={projectPath}>
                    <Typography variant="subtitle1">{project.name}</Typography>
                  </RouterLink>
                  <Typography variant="subtitle2">Автор проекта:&nbsp;
                    <RouterLink to={clientPath}>{name}</RouterLink>
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="flex-end"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Stars value={rating} />
                  <RouterLink to={reviewPath}>Посмотреть отзыв</RouterLink>
                </Box>
              </Box>
              <Divider sx={{ mt: 1 }} />
            </React.Fragment>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default ProjectsCard
