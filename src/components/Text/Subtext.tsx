import React from 'react'
import Typography from '@mui/material/Typography'

type Props = {
  readonly children: React.ReactNode
}

function Subtext ({ children, ...props }: Props) {
  return (
    <Typography
      variant={'subtitle2'}

      {...props}
    >
      {children}
    </Typography>
  )
}

export default Subtext
