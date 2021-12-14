import React from 'react'

import { ProjectStatusType } from 'src/types'

import Status, { StatusProps, ColorProps, WARNING, SUCCESS, ERROR } from './Status'

const color: Record<string, ColorProps> = {
  failed: ERROR,
  inProgress: WARNING,
  completed: SUCCESS
}

type Props = {
  readonly value: ProjectStatusType
} & Omit<StatusProps, 'color'>

function ProjectStatus ({ value, ...props }: Props) {
  return (
    <Status color={color[value]} label={value} {...props} />
  )
}

export default ProjectStatus
