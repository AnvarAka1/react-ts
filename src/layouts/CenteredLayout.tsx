import React from 'react'
import Box from '@mui/material/Box'

import HtmlLayout from './HtmlLayout'

interface Props {
  readonly title: string,
  readonly children: React.ReactNode
}

function CenteredLayout ({ title, children }: Props) {
  return (
    <HtmlLayout title={title}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 700,
          height: '100vh'
        }}
      >
        {children}
      </Box>
    </HtmlLayout>
  )
}

export default CenteredLayout
