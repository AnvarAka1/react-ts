import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { ProjectType } from 'src/types'
import Skills from 'src/components/Skills'
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
        <Box mb={1} display="flex" justifyContent="space-between">
          <Box>
            <Typography>{name}</Typography>
            <Typography variant="subtitle2">{stack.name}</Typography>
          </Box>
          <Typography variant="subtitle2">
            <DateFormat>{createdDate}</DateFormat>
          </Typography>
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
        <Box mb={1}>
          <Typography variant="subtitle2" gutterBottom={true}>Нужные навыки</Typography>
          <Skills skills={skills} />
        </Box>
        <Box mb={1}>
          <Typography
            variant="subtitle2"
            gutterBottom={true}
          >
            Заинтересованные исполнители: {freelancers && freelancers.length} человек
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProjectCard
