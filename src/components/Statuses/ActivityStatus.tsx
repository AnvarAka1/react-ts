import React from 'react'

import Status, { ColorProps, ERROR, StatusProps, SUCCESS } from 'src/components/Statuses/Status'
import { StatusType } from 'src/types'
import { StatusEnum } from 'src/enums'

type Props = {
  readonly value: StatusType
} & Omit<StatusProps, 'color'>

const COLOR: Record<string, ColorProps> = {
  [StatusEnum.ACTIVE]: SUCCESS,
  [StatusEnum.INACTIVE]: ERROR
}

const STATUS: Record<string, string> = {
  [StatusEnum.ACTIVE]: 'Active',
  [StatusEnum.INACTIVE]: 'Inactive'
}

function ActivityStatus ({ value }: Props) {
  return (
    <Status color={COLOR[value]} label={STATUS[value]} />
  )
}

export default ActivityStatus
