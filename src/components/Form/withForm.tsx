import React from 'react'
import { Form, FormProps } from 'react-final-form'

interface HocProps {
  readonly initialValues: any,
  readonly onSubmit: (formValues: FormProps) => void
}

function withForm<T> (Component: (props: T & { form: FormProps }) => JSX.Element) {
  return function (props: T & HocProps) {
    const { initialValues, onSubmit } = props

    return (
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        {(formProps: FormProps) => (
          <Component
            {...props}
            form={formProps}
          />
        )}
      </Form>
    )
  }
}

export default withForm
