import React from 'react'
import { Chip } from '@mui/material'

type Props = {
  readonly value: boolean
}

function Overwork ({ value }: Props) {
  const label = value ? 'Имееются' : 'Не имеются'

  return (
    <Chip
      label={label}
      size="small"
      color="primary"
      variant="outlined"
    />
  )
}

export default Overwork
