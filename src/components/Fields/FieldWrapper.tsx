import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'

export interface FieldWrapperProps {
  readonly name: string
  readonly children: (props: FieldRenderProps<boolean | undefined>) => React.ReactNode
}

function FieldWrapper ({ name, children }: FieldWrapperProps) {
  return (
    <Field name={name}>
      {(fieldProps: FieldRenderProps<boolean | undefined>) => (
        <>{children(fieldProps)}</>
      )}
    </Field>
  )
}

export default FieldWrapper
