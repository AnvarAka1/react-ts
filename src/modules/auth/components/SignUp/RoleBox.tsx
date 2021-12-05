import React, { MouseEventHandler } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled'

const RoleStyledBox = styled(Box)`
  display: flex;
  padding: 10px 44px 10px 32px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #0052FF;
  transition: .25s ease background-color, 0.25s ease color;
  color: ${(props: { active: boolean }) => props.active ? '#FFFFFF' : '#0052FF'};
  background: ${(props: { active: boolean }) => props.active ? '#0052FF' : '#FFFFFF'};
  &:hover {
    color: #FFFFFF;
    background: #0052FF;
  }
`

interface Props {
  readonly active: boolean
  readonly icon: React.ReactNode
  readonly title: React.ReactNode | string
  readonly onClick: MouseEventHandler<HTMLDivElement>
}

function RoleBox ({ active, icon, title, onClick }: Props) {
  return (
    <RoleStyledBox
      active={active}
      onClick={onClick}
    >
      {icon}
      <Typography>{title}</Typography>
    </RoleStyledBox>
  )
}

export default RoleBox
