import React from 'react'
import Heading from "src/components/Heading"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import TextField from "src/components/Fields/TextField"
import Box from "@mui/material/Box"
import { Checkbox, Link } from "@mui/material"
import Typography from "@mui/material/Typography"
import PrimaryButton from "src/components/Buttons/PrimaryButton"

function SignUp () {
  return (
    <Card sx={{ width: 400 }}>
      <CardHeader title={<Heading>Регистрация</Heading>}/>
      <CardContent>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12} lg={6}>
            <TextField name="Имя" label="Имя"/>
          </Grid>

          <Grid item={true} xs={12} lg={6}>
            <TextField name="Фамилия" label="Фамилия"/>
          </Grid>

          <Grid item={true} xs={12}>
            <TextField name="email" label="Эл. почта"/>
          </Grid>

          <Grid item={true} xs={12}>
            <TextField name="password" type="password" label="Пароль"/>
          </Grid>

          <Grid item={true} xs={12}>
            <TextField name="confirmPassword" type="password" label="Повторите пароль"/>
          </Grid>

          <Grid item={true} xs={12}>
            <Box display="flex">
              <Checkbox/>
              <Typography>Нажимая на кнопку вы соглашаетесь с
                &nbsp;<Link href="">Публичной офертой</Link>
              </Typography>
            </Box>
          </Grid>

          <Grid item={true} xs={12}>
            <PrimaryButton fullWidth={true}>
              Далее
            </PrimaryButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SignUp
