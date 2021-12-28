import React from 'react'

import AsyncSelectField, { AsyncSelectFieldProps } from 'src/components/Fields/AsyncSelectField'

type Props = {
  readonly name?: string,
  readonly label?: string
} & Omit<AsyncSelectFieldProps, 'name' | 'label'>

function StackSearchField (props: Props) {
  const {
    name = 'stack',
    label = 'Выберите стек',
    ...rest
  } = props

  return (
    <AsyncSelectField
      name={name}
      label={label}
      {...rest}
    />
  )
}

export default StackSearchField
