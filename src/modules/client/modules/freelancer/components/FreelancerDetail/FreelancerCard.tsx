import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Avatar from 'src/components/Avatar'
import { FreelancerType } from 'src/types'
import Skills from 'src/components/Skills'
import RouterLink from 'src/components/RouterLink'
import * as ROUTES from 'src/constants/routes'

type Props = {
  readonly freelancer: FreelancerType
}

function FreelancerCard ({ freelancer }: Props) {
  const { avatar, fullName, description, skills, stack } = freelancer

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" mb={1}>
            <Avatar src={avatar} alt={fullName} />
            <Box ml={2}>
              <Typography>{fullName}</Typography>
              <Typography variant="subtitle2">{stack.name}</Typography>
            </Box>
          </Box>
          <RouterLink to={ROUTES.FREELANCER_LIST}>Назад</RouterLink>
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle2" gutterBottom={true}>О себе</Typography>
          <Typography variant="subtitle2" color="inherit">{description}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" gutterBottom={true}>Навыки</Typography>
          <Skills skills={skills} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default FreelancerCard
