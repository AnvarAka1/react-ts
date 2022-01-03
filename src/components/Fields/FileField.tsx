import React from 'react'
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

import FieldWrapper from 'src/components/Fields/FieldWrapper'

export type FileFieldProps = {
  readonly name: string
} & MuiTextFieldProps

function FileField (props: FileFieldProps) {
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

export default FileField
