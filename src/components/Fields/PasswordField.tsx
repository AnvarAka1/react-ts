import React from 'react'

import TextField, { TextFieldProps } from 'src/components/Fields/TextField'

type Props = {
  readonly name?: string
  readonly label?: string
  readonly autoComplete?: string
} & Omit<TextFieldProps, 'name'>

function PasswordField (props: Props) {
  const {
    name = 'password',
    label = 'Пароль',
    autoComplete = 'password',
    ...rest
  } = props

  return (
    <TextField
      name={name}
      label={label}
      type="password"
      autoComplete={autoComplete}
      {...rest}
    />
  )
}

export default PasswordField
