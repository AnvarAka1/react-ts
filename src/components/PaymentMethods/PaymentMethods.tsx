import React from 'react'
import { Chip } from '@mui/material'
import Box from '@mui/material/Box'
import { path } from 'ramda'

import { PaymentMethodsType } from 'src/types'

type Props = {
  paymentMethods?: PaymentMethodsType
}

function PaymentMethods ({ paymentMethods }: Props) {
  const cash = path(['cash'], paymentMethods)
  const card = path(['card'], paymentMethods)
  const transfer = path(['transfer'], paymentMethods)

  return (
    <Box>
      {cash && (
        <Chip
          label="Наличные"
          size="small"
          color="primary"
          variant="outlined"
          sx={{ mr: 1 }}
        />
      )}
      {card && (
        <Chip
          label="Перевод с карты"
          size="small"
          color="primary"
          variant="outlined"
          sx={{ mr: 1 }}
        />
      )}
      {transfer && (
        <Chip
          label="Перечисление"
          size="small"
          color="primary"
          variant="outlined"
          sx={{ mr: 1 }}
        />
      )}
    </Box>
  )
}

export default PaymentMethods
