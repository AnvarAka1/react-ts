import React from 'react'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import Typography, { TypographyProps } from '@mui/material/Typography'

type Props = {
  readonly children: string
  readonly boxProps?: BoxProps
} & Omit<TypographyProps, 'children'>

const OverflowBox = styled(Box)`
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const OverflowTypography = styled(Typography)`
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`
function TextOverflow ({ children, boxProps, ...props }: Props) {
  return (
    <OverflowBox {...boxProps}>
      <OverflowTypography {...props}>
        {children}
      </OverflowTypography>
    </OverflowBox>
  )
}

export default TextOverflow
