import React from 'react'

import AsyncMultiSelectField, { AsyncMultiSelectFieldProps } from 'src/components/Fields/AsyncMultiSelectField'

type Props = {
  readonly name?: string,
  readonly label?: string
} & Omit<AsyncMultiSelectFieldProps, 'name' | 'label'>

function SkillsSearchMultiSelectField (props: Props) {
  const {
    name = 'skills',
    label = 'Навыки',
    ...rest
  } = props

  return (
    <AsyncMultiSelectField
      name={name}
      label={label}
      {...rest}
    />
  )
}

export default SkillsSearchMultiSelectField
