import React from 'react'
import { Form, FormRenderProps } from 'react-final-form'

export interface withFormProps {
  form: FormRenderProps
}

interface HocProps {
  readonly initialValues: Record<string, unknown>,
  readonly onSubmit: (formValues: Record<string, any>) => void
}

function withForm<T extends { form: FormRenderProps }> (Component: (props: T) => JSX.Element) {
  return function (props: Omit<T, 'form'> & HocProps) {
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
