import React from 'react'

import { ProjectStatusType } from 'src/types'
import { ProjectStatusEnum } from 'src/enums'

import Status, { StatusProps, ColorProps, WARNING, SUCCESS, ERROR } from './Status'

const color: Record<string, ColorProps> = {
  failed: ERROR,
  inProgress: WARNING,
  completed: SUCCESS
}

export const NAMES = {
  [ProjectStatusEnum.FAILED]: 'Failed',
  [ProjectStatusEnum.IN_PROGRESS]: 'In progress',
  [ProjectStatusEnum.COMPLETED]: 'Completed'
}

type Props = {
  readonly value: ProjectStatusType
} & Omit<StatusProps, 'color'>

function ProjectStatus ({ value, ...props }: Props) {
  return (
    <Status color={color[value]} label={NAMES[value]} {...props} />
  )
}

export default ProjectStatus
