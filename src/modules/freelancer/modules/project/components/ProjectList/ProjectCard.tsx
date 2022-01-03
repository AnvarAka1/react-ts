import React from 'react'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { generatePath } from 'react-router-dom'
import { styled } from '@mui/material/styles'

import { ProjectType } from 'src/types'
import HoverCard from 'src/components/Cards'
import RouterLink from 'src/components/RouterLink'
import * as ROUTES from 'src/constants/routes'
import DateFormat from 'src/components/DateFormat/DateFormat'
import Price from 'src/components/Price/Price'

type Props = {
  project: ProjectType
}

const DateBox = styled(Box)`
  position: absolute;
  right: 12px;
  top: 12px;
  font-size: 10px;
  color: grey;
`

function ProjectCard ({ project }: Props) {
  const {
    id,
    name,
    description,
    price,
    stack,
    createdDate
  } = project

  const path = generatePath(ROUTES.PROJECT_DETAIL_PATH, { id })

  return (
    <HoverCard style={{ position: 'relative' }}>
      <CardContent>
        <Box mb={2}>
          <RouterLink to={path}>
            <Typography>{name}</Typography>
            <Typography variant={'subtitle2'}>{stack.name}</Typography>
          </RouterLink>
          <DateBox>
            <DateFormat>{createdDate}</DateFormat>
          </DateBox>
        </Box>
        <Box mb={1}>
          <RouterLink to={path}>
            <Typography variant={'subtitle2'} color={'inherit'}>{description}</Typography>
          </RouterLink>
        </Box>
        <Box>
          <Typography variant={'subtitle2'} color={'inherit'}>
            Стоимость работы: <Price value={price} />
          </Typography>
        </Box>
      </CardContent>
    </HoverCard>
  )
}

export default ProjectCard
