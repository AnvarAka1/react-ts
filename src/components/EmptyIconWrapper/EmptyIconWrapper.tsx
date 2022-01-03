import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import Typography, { TypographyProps } from '@mui/material/Typography'

type Props = {
  readonly children: React.ReactNode
  readonly primaryText?: string
  readonly secondaryText?: string
  readonly primaryTextProps?: TypographyProps
  readonly secondaryTextProps?: TypographyProps
} & BoxProps

function EmptyIconWrapper (props: Props) {
  const {
    children,
    primaryText,
    secondaryText,
    primaryTextProps,
    secondaryTextProps,
    ...rest
  } = props

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      {...rest}
    >
      {children}
      <Box textAlign="center">
        <Typography {...primaryTextProps}>{primaryText}</Typography>
        {secondaryText && <Typography {...secondaryTextProps}>{secondaryText}</Typography>}
      </Box>
    </Box>
  )
}

export default EmptyIconWrapper
