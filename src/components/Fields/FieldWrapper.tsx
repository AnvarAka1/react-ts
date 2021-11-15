import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'

type ValueType = string | number | null | undefined | Record<string, unknown>

export interface FieldWrapperProps {
  readonly name: string
  readonly children: (props: FieldRenderProps<ValueType>) => React.ReactNode
}

function FieldWrapper ({ name, children }: FieldWrapperProps) {
  return (
    <Field name={name}>
      {fieldProps => (
        <>{children(fieldProps)}</>
      )}
    </Field>
  )
}

export default FieldWrapper
