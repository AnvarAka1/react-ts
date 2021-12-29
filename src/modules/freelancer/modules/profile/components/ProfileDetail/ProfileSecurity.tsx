import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import withForm, { withFormProps } from 'src/components/Form/withForm'
import Heading from 'src/components/Heading'
import EmailField from 'src/components/Fields/EmailField'
import PasswordField from 'src/components/Fields/PasswordField'
import PrimaryButton from 'src/components/Buttons/PrimaryButton'

type Props = withFormProps

function ProfileSecurity ({ form } : Props) {
  const { handleSubmit } = form

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={3}>
        <Heading>Безопасность</Heading>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <EmailField />
          </Grid>
          <Grid item={true} xs={12}>
            <PasswordField name="password" label="Текущий пароль" />
          </Grid>

          <Grid item={true} xs={12}>
            <PasswordField
              name="newPassword"
              label="Новый пароль"
              autoComplete="new-password"
            />
          </Grid>

          <Grid item={true} xs={12}>
            <PasswordField
              name="confirmPassword"
              label="Подтвердите пароль"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button onClick={() => {}}>Сбросить</Button>
        <PrimaryButton type="submit" sx={{ ml: 1 }}>
          Сохранить
        </PrimaryButton>
      </Box>
    </form>
  )
}

export default withForm(ProfileSecurity)
