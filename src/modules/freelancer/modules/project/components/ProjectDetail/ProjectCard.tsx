import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { ProjectType } from 'src/types'
import Skills from 'src/components/Skills'
import RouterLink from 'src/components/RouterLink'
import * as ROUTES from 'src/constants/routes'
import DateFormat from 'src/components/DateFormat/DateFormat'

type Props = {
  readonly project: ProjectType
}

function ProjectCard ({ project }: Props) {
  const {
    name,
    file,
    skills,
    stack,
    description,
    requirement,
    freelancers,
    createdDate
  } = project

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" mb={1}>
            <Typography>{name}</Typography>
            <Typography variant="subtitle2">{stack.name}</Typography>
            <Typography variant="subtitle2">
              <DateFormat>{createdDate}</DateFormat>
            </Typography>

          </Box>
          <RouterLink to={ROUTES.FREELANCER_LIST}>Назад</RouterLink>
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle2" gutterBottom={true}>Описание</Typography>
          <Typography variant="subtitle2" color="inherit">{description}</Typography>
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle2" gutterBottom={true}>Требование</Typography>
          <Typography variant="subtitle2" color="inherit">{requirement}</Typography>
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle2" gutterBottom={true}>Прикрепленные файлы</Typography>
          <Typography variant="subtitle2" color="inherit">{file}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom={true}>Нужные навыки</Typography>
          <Skills skills={skills} />
        </Box>
        <Box>
          <Typography
            variant="subtitle2"
            gutterBottom={true}
          >
            Заинтересованные исполнители: {freelancers && freelancers.length}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
