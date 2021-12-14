import React from 'react'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import { ProjectType } from 'src/types'
import RouterLink from 'src/components/RouterLink'
import HoverCard from 'src/components/Cards'

type Props = {
  readonly project: ProjectType
  readonly path: string
}

function MyProject ({ project, path }: Props) {
  return (
    <HoverCard sx={{ mb: 1 }}>
      <RouterLink to={path}>
        <CardContent>
          <Typography>{project.name}</Typography>
          <>{project.status}</>
        </CardContent>
      </RouterLink>
    </HoverCard>
  )
}

export default MyProject
