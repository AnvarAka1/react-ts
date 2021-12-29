import React from 'react'
import Box from '@mui/material/Box'

import TextField from 'src/components/Fields/TextField'
import CurrencySelectField from 'src/components/Fields/CurrencySelectField'

type Props = {
  readonly priceName?: string
  readonly priceLabel?: string
  readonly priceProps?: Record<string, unknown>
  readonly currencyName?: string
  readonly currencyLabel?: string
  readonly currencyProps?: Record<string, unknown>
}

function PriceField (props: Props) {
  const {
    priceName = 'price.price',
    priceLabel = 'Оплата в час',
    currencyName = 'price.currency',
    currencyLabel = 'Валюта',
    priceProps,
    currencyProps
  } = props

  return (
    <Box display="flex" alignItems="center">
      <Box mr={2} width="80%">
        <TextField
          name={priceName}
          label={priceLabel}
          {...priceProps}
        />
      </Box>
      <Box width="20%">
        <CurrencySelectField
          name={currencyName}
          label={currencyLabel}
          {...currencyProps}
        />
      </Box>
    </Box>
  )
}

export default PriceField
