import React from 'react'
import { Form, FormRenderProps } from 'react-final-form'
import arrayMutators from 'final-form-arrays'

export interface withFormProps {
  form: FormRenderProps
}

interface HocProps<ArgsType> {
  readonly initialValues?: Record<string, unknown>,
  readonly onSubmit: (formValues: ArgsType) => Promise<void> | void
}

function withForm<T extends { form: FormRenderProps }> (Component: (props: T) => JSX.Element) {
  function FormComponent <ArgsType> (props: Omit<T, 'form'> & HocProps<ArgsType>) {
    const { initialValues, onSubmit, ...rest } = props

    return (
      <Form initialValues={initialValues} onSubmit={onSubmit} mutators={{ ...arrayMutators }}>
        {(formProps: FormRenderProps) => (
          <Component
            {...rest as unknown as T}
            form={formProps}
          />
        )}
      </Form>
    )
  }

  return FormComponent
}

export default withForm
