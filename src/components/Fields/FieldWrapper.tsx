import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'

export interface FieldWrapperProps {
  readonly name: string
  readonly children: (props: FieldRenderProps<any>) => React.ReactNode
}

function FieldWrapper ({ name, children }: FieldWrapperProps) {
  return (
    <Field name={name}>
      {(fieldProps: FieldRenderProps<any>) => (
        <>{children(fieldProps)}</>
      )}
    </Field>
  )
}

export default FieldWrapper
