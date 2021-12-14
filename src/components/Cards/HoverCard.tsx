import React from 'react'
import MuiCard, { CardProps } from '@mui/material/Card'
import { styled } from '@mui/material/styles'

const Card = styled(MuiCard)`
  transition: background .25s ease;
  &:hover {
    background: #f1f1f1
  }
`

type Props = CardProps

function HoverCard ({ children }: Props) {
  return (
    <Card>
      {children}
    </Card>
  )
}

export default HoverCard
