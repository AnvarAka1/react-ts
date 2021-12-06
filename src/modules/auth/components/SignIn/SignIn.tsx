import React from 'react'
import Heading from 'src/components/Heading'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import TextField from 'src/components/Fields/TextField'

function SignIn () {
  return (
    <Card sx={{ width: 400 }}>
      <CardHeader title={<Heading>Авторизация</Heading>} />
      <CardContent>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <TextField name="email" label="Эл. почта" />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField name="password" type="password" label="Пароль" />
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  )
}

export default SignIn
