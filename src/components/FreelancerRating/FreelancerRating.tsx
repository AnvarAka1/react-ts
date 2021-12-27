import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { RatingType } from 'src/types'
import Stars from 'src/components/Stars'

type Props = {
  readonly value: RatingType
}

function FreelancerRating ({ value }: Props) {
  const { rating, count } = value
  return (
    <Box display="flex">
      <Stars value={rating} />
      <Box mr={2} />
      <Typography>{count} голосов</Typography>
    </Box>
  )
}

export default FreelancerRating
