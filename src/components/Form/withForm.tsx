import React from 'react'
import { Form, FormRenderProps } from 'react-final-form'



export interface withFormProps {
  form: FormRenderProps
}

interface HocProps {
  readonly initialValues: any,
  readonly onSubmit: (formValues: FormRenderProps) => void
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
