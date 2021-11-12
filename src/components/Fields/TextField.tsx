import React from 'react'
import MuiTextField, { TextFieldProps } from '@mui/material/TextField'
import FieldWrapper from "src/components/Fields/FieldWrapper"

type Props = {
  readonly name: string
} & TextFieldProps

function TextField (props: Props) {
  const {
    name,
    variant = 'outlined',
    size = 'medium',
    fullWidth = true,
    ...rest
  } = props

  return (
    <FieldWrapper name={name}>
      {({ input }) => (
        <MuiTextField
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          {...rest}
          value={input.value}
          onChange={input.onChange}
        />
      )}
    </FieldWrapper>
  )
}

export default TextField
