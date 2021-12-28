import React from 'react'
import Select, { SelectProps } from '@mui/material/Select'
import { FormControl, InputLabel } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

import FieldWrapper from 'src/components/Fields/FieldWrapper'

export type OptionType = {
  readonly value: string
  readonly name: string
}

type Props = {
  readonly name: string
  readonly label: string
  readonly options: OptionType[]
} & SelectProps

function SelectField ({ name, options, label, ...props }: Props) {
  const selectOptions = options.map(option => (
    <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
  ))

  return (
    <FieldWrapper name={name}>
      {({ input }) => (
        <FormControl fullWidth={true}>
          <InputLabel id={name}>{label}</InputLabel>
          <Select
            labelId={name}
            value={input.value}
            label={label}
            onChange={input.onChange}
            {...props}
          >
            {selectOptions}
          </Select>
        </FormControl>
      )}
    </FieldWrapper>
  )
}

export default SelectField
