import React from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

import Heading from 'src/components/Heading'
import PasswordField from 'src/components/Fields/PasswordField'
import EmailField from 'src/components/Fields/EmailField'

function SignIn () {
  return (
    <Card sx={{ width: 400 }}>
      <CardHeader title={<Heading gutterBottom={false}>Авторизация</Heading>} />
      <CardContent>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <EmailField />
          </Grid>
          <Grid item={true} xs={12}>
            <PasswordField />
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  )
}

export default SignIn
