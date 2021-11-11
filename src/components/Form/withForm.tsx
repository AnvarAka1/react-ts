import React from 'react'
import { Form, FormProps } from 'react-final-form'



export interface withFormProps {
  form: FormProps
}

interface HocProps {
  readonly initialValues: any,
  readonly onSubmit: (formValues: FormProps) => void
}

function withForm<T extends { form: FormProps }> (Component: (props: T) => JSX.Element) {

  return function (props: Omit<T, 'form'> & HocProps) {
    const { initialValues, onSubmit, ...rest } = props

    return (
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        {(formProps: FormProps) => (
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
