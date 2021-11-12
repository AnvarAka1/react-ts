import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'

export interface FieldWrapperProps {
  readonly name: string
  readonly children: (props: FieldRenderProps<string | number>) => React.ReactNode
}

function FieldWrapper ({ name, children }: FieldWrapperProps) {
  return (
    <Field name={name}>
      {(fieldProps: FieldRenderProps<string | number>) => (
        <>{children(fieldProps)}</>
      )}
    </Field>
  )
}

export default FieldWrapper
