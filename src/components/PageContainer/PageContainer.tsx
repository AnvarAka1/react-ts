import React from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

type Props = {
  readonly children: React.ReactNode
}

function PageContainer ({ children }: Props) {
  return (
    <Container maxWidth={'xl'} sx={{ pt: 5, pb: 5 }}>
      <Grid container={true}>
        <Grid item={true} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default PageContainer
