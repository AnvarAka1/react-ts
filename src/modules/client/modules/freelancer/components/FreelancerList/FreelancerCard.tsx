import React from 'react'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { generatePath } from 'react-router-dom'

import { FreelancerType } from 'src/types'
import HoverCard from 'src/components/Cards'
import Avatar from 'src/components/Avatar'
import LimitSkills from 'src/components/Skills/LimitSkills'
import RouterLink from 'src/components/RouterLink'
import * as ROUTES from 'src/constants/routes'

type Props = {
  freelancer: FreelancerType
}

function FreelancerCard ({ freelancer }: Props) {
  const {
    id,
    avatar,
    fullName,
    skills,
    stack,
    description
  } = freelancer

  const path = generatePath(ROUTES.FREELANCER_DETAIL, { id })

  return (
    <HoverCard>
      <CardContent>
        <Box display={'flex'}>
          <RouterLink to={path}>
            <Avatar src={avatar} alt={fullName} />
          </RouterLink>
          <Box ml={2}>
            <Box mb={2}>
              <RouterLink to={path}>
                <Typography>{fullName}</Typography>
                <Typography variant={'subtitle2'}>{stack.name}</Typography>
              </RouterLink>
            </Box>
            <Box mb={1}>
              <RouterLink to={path}>
                <Typography variant={'subtitle2'} color={'inherit'}>{description}</Typography>
              </RouterLink>
            </Box>
            <Box>
              <LimitSkills skills={skills} />
            </Box>
          </Box>
        </Box>

      </CardContent>
    </HoverCard>
  )
}

export default FreelancerCard
