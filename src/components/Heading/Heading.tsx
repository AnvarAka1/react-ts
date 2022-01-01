import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

type Props = {
  readonly children: string | React.ReactNode
} & TypographyProps

function Heading ({ children, ...props }: Props) {
  return (
    <Typography
      variant={'h6'}
      gutterBottom={true}
      {...props}
    >
      {children}
    </Typography>
  )
}

export default Heading
