import React from 'react'

import TextField, { TextFieldProps } from 'src/components/Fields/TextField'

type Props = {
  readonly name?: string
  readonly label?: string
  readonly autoComplete?: string
} & Omit<TextFieldProps, 'name'>

function EmailField (props: Props) {
  const {
    name = 'email',
    label = 'Эл. почта',
    autoComplete = 'email',
    ...rest
  } = props

  return (
    <TextField
      name={name}
      label={label}
      type="email"
      autoComplete={autoComplete}
      {...rest}
    />
  )
}

export default EmailField
