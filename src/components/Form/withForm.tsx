import React from 'react'
import { Form, FormRenderProps } from 'react-final-form'

export interface withFormProps {
  form: FormRenderProps
}

interface HocProps<ArgsType> {
  readonly initialValues: Record<string, unknown>,
  readonly onSubmit: (formValues: ArgsType) => void
}

function withForm<T extends { form: FormRenderProps }> (Component: (props: T) => JSX.Element) {
  return function <ArgsType>(props: Omit<T, 'form'> & HocProps<ArgsType>) {
    const { initialValues, onSubmit, ...rest } = props

    return (
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        {(formProps: FormRenderProps) => (
          <Component
            {...rest as unknown as T}
            form={formProps}
          />
        )}
      </Form>
    )
  }
}

export default withForm
