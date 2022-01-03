import React from 'react'
import Box from '@mui/material/Box'

import CheckboxField from 'src/components/Fields/CheckboxField'

type Props = {
  readonly name: string
}

function PaymentMethodsField ({ name }: Props) {
  return (
    <Box display="flex" gap="32px">
      <CheckboxField name={`${name}.cash`} label="Наличные" />
      <CheckboxField name={`${name}.card`} label="Перевод с карты" />
      <CheckboxField name={`${name}.transfer`} label="Перечисление" />
    </Box>
  )
}

export default PaymentMethodsField
