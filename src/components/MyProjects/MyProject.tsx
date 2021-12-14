import React from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import { ProjectType } from 'src/types'
import RouterLink from 'src/components/RouterLink'
import HoverCard from 'src/components/Cards'
import ProjectStatus from 'src/components/Statuses/ProjectStatus'

type Props = {
  readonly project: ProjectType
  readonly path: string
}

function MyProject ({ project, path }: Props) {
  return (
    <HoverCard sx={{ mb: 1 }}>
      <RouterLink to={path}>
        <CardContent>
          <Typography gutterBottom={true}>{project.name}</Typography>
          <ProjectStatus value={project.status} />
        </CardContent>
      </RouterLink>
    </HoverCard>
  )
}

export default MyProject
