import React from 'react'
import MuiTextField, { TextFieldProps } from '@mui/material/TextField'

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
    <MuiTextField
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...rest}
    />
  )
}

export default TextField
