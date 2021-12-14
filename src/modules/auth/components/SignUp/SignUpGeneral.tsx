import React from 'react'
import Grid from '@mui/material/Grid'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'
import { useField } from 'react-final-form'

import Heading from 'src/components/Heading'
import TextField from 'src/components/Fields/TextField'
import RoleBox from 'src/modules/auth/components/SignUp/RoleBox'
import { CLIENT, FREELANCER } from 'src/constants/roles'
import CheckboxField from 'src/components/Fields/CheckboxField'
import PrimaryButton from 'src/components/Buttons/PrimaryButton'

interface Props {
  readonly onNextClick: (role: string) => void
}

function SignUpGeneral ({ onNextClick }: Props) {
  const roleField = useField('role')
  const role = roleField.input.value

  const handleRoleClick = (newRole: string) => {
    roleField.input.onChange(newRole)
  }

  return (
    <Grid container={true} spacing={2}>
      <Grid item={true} xs={12}>
        <Heading gutterBottom={false}>Регистрация</Heading>
      </Grid>

      <Grid item={true} xs={12} lg={6}>
        <TextField name="firstName" label="Имя" />
      </Grid>

      <Grid item={true} xs={12} lg={6}>
        <TextField name="lastName" label="Фамилия" />
      </Grid>

      <Grid item={true} xs={12}>
        <TextField
          name="email"
          label="Эл. почта"
          type="email"
          autoComplete="username"
        />
      </Grid>

      <Grid item={true} xs={12}>
        <TextField
          name="password"
          type="password"
          label="Пароль"
          autoComplete="password"
        />
      </Grid>

      <Grid item={true} xs={12}>
        <TextField
          name="confirmPassword"
          type="password"
          label="Повторите пароль"
          autoComplete="new-password"
        />
      </Grid>

      <Grid item={true} xs={6}>
        <RoleBox
          active={role === CLIENT}
          icon={<WorkOutlineIcon />}
          title="Client"
          onClick={() => handleRoleClick(CLIENT)}
        />
      </Grid>
      <Grid item={true} xs={6}>
        <RoleBox
          active={role === FREELANCER}
          icon={<PersonOutlineIcon />}
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
        <PrimaryButton
          onClick={() => onNextClick(role)}
          fullWidth={true}
        >
          Далее
        </PrimaryButton>
      </Grid>
    </Grid>
  )
}

export default SignUpGeneral
