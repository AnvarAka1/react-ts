import React from 'react'
import Box from '@mui/material/Box'

interface Props {
  readonly children: React.ReactNode
}

function AuthLayout ({ children }: Props) {
  return (
    <Box sx={{ background: 'F4F5F8', pb: 5 }}>
      {children}
    </Box>
  )
}

export default AuthLayout
