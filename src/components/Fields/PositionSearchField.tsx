import React from 'react'

import AsyncSelectField, { AsyncSelectFieldProps } from 'src/components/Fields/AsyncSelectField'

type Props = {
  readonly name?: string,
  readonly label?: string
} & Omit<AsyncSelectFieldProps, 'name' | 'label'>

function PositionSearchField (props: Props) {
  const {
    name = 'position',
    label = 'Выберите должность',
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

export default PositionSearchField
