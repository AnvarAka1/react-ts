import React from 'react'
import { Form, FormProps } from 'react-final-form'

function withForm (Component: (props: any) => JSX.Element, ComponentProps: any) {
  return (props: typeof ComponentProps) => {
    const { initialValues, onSubmit, ...rest } = props


    return (
      <Form initialValues={initialValues} onSubmit={onSubmit}>
        {(props: FormProps) => (
          <Component
            {...rest}
            form={props}
          />
        )}
      </Form>
    )
  }

}

export default withForm
