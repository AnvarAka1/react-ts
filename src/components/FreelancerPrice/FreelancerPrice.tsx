import React from 'react'
import Typography from '@mui/material/Typography'

import { PriceType } from 'src/types'

type Props = {
  readonly value?: PriceType
}

function FreelancerPrice ({ value }: Props) {
  const content = value ? `По ${value.price} ${value.currency} за час` : 'Неизвестно'
  return (
    <Typography>{content}</Typography>
  )
}

export default FreelancerPrice
