import React from 'react'
import { Freelancer } from 'src/types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Avatar from 'src/components/Avatar'
import Typography from '@mui/material/Typography'
import LimitSkills from 'src/components/Skills/LimitSkills'
import { generatePath, Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import * as ROUTES from 'src/constants/routes'

type Props = {
  freelancer: Freelancer
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
    <Card>
      <CardContent>
        <Box display={'flex'}>
          <Link to={path} component={RouterLink}>
            <Avatar src={avatar} alt={fullName} />
          </Link>
          <Box>
            <Box mb={2}>
              <Link to={path} component={RouterLink}>
                <Typography>{fullName}</Typography>
                <Typography variant={'subtitle2'}>{stack.name}</Typography>
              </Link>
            </Box>
            <Box mb={1}>
              <Link to={path} component={RouterLink}>
                <Typography>{description}</Typography>
              </Link>
            </Box>
            <Box>
              <LimitSkills skills={skills} />
            </Box>
          </Box>
        </Box>

      </CardContent>
    </Card>
  )
}

export default FreelancerCard
