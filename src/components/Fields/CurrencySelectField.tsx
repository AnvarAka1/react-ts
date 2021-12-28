import React from 'react'

import SelectField, { OptionType } from 'src/components/Fields/SelectField'

const OPTIONS:OptionType[] = [
  {
    value: 'usd',
    name: 'USD'
  },
  {
    value: 'uzs',
    name: 'UZS'
  }
]

export type Props = {
  readonly name: string
  readonly label: string
}

function CurrencySelectField (props: Props) {
  const {
    name = 'currency',
    label = 'Валюта',
    ...rest
  } = props

  return (
    <SelectField
      name={name}
      label={label}
      options={OPTIONS}
      {...rest}
    />
  )
}

export default CurrencySelectField
