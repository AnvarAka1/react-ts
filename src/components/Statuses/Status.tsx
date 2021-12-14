import React from 'react'
import Chip, { ChipProps } from '@mui/material/Chip'

export const SUCCESS = 'success'
export const WARNING = 'warning'
export const ERROR = 'error'

export type ColorProps = 'success' | 'warning' | 'error'

export type StatusProps = {
  readonly color: ColorProps
} & Omit<ChipProps, 'color'>

function Status ({ color, ...props }: StatusProps) {
  return (
    <Chip size={'small'} color={color} {...props} />
  )
}

export default Status
