import React from 'react'
import Heading from "src/components/Heading"
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import CardContent from "@mui/material/CardContent"
import TextField from "src/components/Fields/TextField"
import Box from "@mui/material/Box"
import { Link } from "@mui/material"
import Typography from "@mui/material/Typography"
import PrimaryButton from "src/components/Buttons/PrimaryButton"
import withForm, { withFormProps } from 'src/components/Form/withForm'
import CheckboxField from "src/components/Fields/CheckboxField"
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import RoleBox from "./RoleBox"
import { useField } from "react-final-form"
import { CLIENT, FREELANCER } from 'src/constants/roles'

type Props = {} & withFormProps


function SignUp ({ form }: Props) {
  const roleField = useField('role')
  const role = roleField.input.value

  const handleRoleClick = (newRole: string) => {
    roleField.input.onChange(newRole)
  }

  return (
    <Card sx={{ width: 450 }}>
      <CardContent>
        <Grid container={true} spacing={2}>
          <Grid item={true} xs={12}>
            <Heading>Регистрация</Heading>
          </Grid>

          <Grid item={true} xs={12} lg={6}>
            <TextField name="Имя" label="Имя"/>
          </Grid>

          <Grid item={true} xs={12} lg={6}>
            <TextField name="Фамилия" label="Фамилия"/>
          </Grid>

          <Grid item={true} xs={12}>
            <TextField name="email" label="Эл. почта" type="email"/>
          </Grid>

          <Grid item={true} xs={12}>
            <TextField name="password" type="password" label="Пароль"/>
          </Grid>

          <Grid item={true} xs={12}>
            <TextField name="confirmPassword" type="password" label="Повторите пароль"/>
          </Grid>

          <Grid item={true} xs={6}>
            <RoleBox
              active={role === CLIENT}
              icon={<WorkOutlineIcon/>}
              title="Client"
              onClick={() => handleRoleClick(CLIENT)}
            />
          </Grid>
          <Grid item={true} xs={6}>
            <RoleBox
              active={role === FREELANCER}
              icon={<PersonOutlineIcon/>}
              title="Freelancer"
              onClick={() => handleRoleClick(FREELANCER)}
            />
          </Grid>

          <Grid item={true} xs={12}>
            <Box display="flex">
              <CheckboxField
                name="agree"
                label={(
                  <Typography>Нажимая на кнопку вы соглашаетесь с
                    &nbsp;<Link href="#">Публичной офертой</Link>
                  </Typography>
                )}
              />
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

export default withForm(SignUp)
