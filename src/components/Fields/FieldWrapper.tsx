import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'

type ValueType = string | number | null | undefined | Record<string, unknown>

export type FieldWrapperProps = {
  readonly name: string
  readonly type?: string
  readonly children: (props: FieldRenderProps<ValueType>) => React.ReactNode
}

function FieldWrapper ({ name, type, children }: FieldWrapperProps) {
  return (
    <Field name={name} type={type}>
      {fieldProps => (
        <>{children(fieldProps)}</>
      )}
    </Field>
  )
}

export default FieldWrapper
