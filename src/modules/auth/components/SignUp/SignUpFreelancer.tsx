import React from 'react'
import Grid from "@mui/material/Grid"
import Heading from "src/components/Heading"
import TextField from "src/components/Fields/TextField"
import PrimaryButton from "src/components/Buttons/PrimaryButton"
import Button from "@mui/material/Button"
import AsyncSelectField from "src/components/Fields/AsyncSelectField"

interface Props {
  readonly onPrevClick: (event: React.MouseEvent) => void
}

function SignUpFreelancer ({ onPrevClick }: Props) {
  return (
    <Grid container={true} spacing={2}>
      <Grid item={true} xs={12}>
        <Heading>Завершите регистрацию</Heading>
      </Grid>

      <Grid item={true} xs={12}>
        <AsyncSelectField name="stack" label="Выберите стек"/>
      </Grid>

      <Grid item={true} xs={12}>
        <TextField name="phone" label="Номер телефона"/>
      </Grid>

      <Grid item={true} xs={12}>
        <TextField name="skills" label="Навыки"/>
      </Grid>

      <Grid item={true} xs={12}>
        <TextField
          name="about"
          label="О себе"
          multiline={true}
          rows={4}
        />
      </Grid>
      <Grid item={true} xs={12}>
        <PrimaryButton
          type="submit"
          fullWidth={true}
        >
          Готово
        </PrimaryButton>
        <Button onClick={onPrevClick}>
          Назад
        </Button>
      </Grid>
    </Grid>
  )
}

export default SignUpFreelancer
