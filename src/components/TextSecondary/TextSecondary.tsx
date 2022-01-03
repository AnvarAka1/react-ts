import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

type Props = {
  readonly children: string | React.ReactNode | null
} & Omit<TypographyProps, 'children'>

function TextSecondary ({ children, ...props }: Props) {
  return (
    <Typography variant="subtitle2" {...props}>
      <i>{children}</i>
    </Typography>
  )
}

export default TextSecondary
