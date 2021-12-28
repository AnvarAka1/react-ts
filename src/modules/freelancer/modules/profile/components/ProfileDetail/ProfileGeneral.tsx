import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import withForm, { withFormProps } from 'src/components/Form/withForm'
import Heading from 'src/components/Heading'
import TextField from 'src/components/Fields/TextField'
import StackSearchField from 'src/components/Fields/StackSearchField'
import SkillsSearchMultiSelectField from 'src/components/Fields/SkillsSearchMultiSelectField'
import PriceField from 'src/components/Fields/PriceField'
import PrimaryButton from 'src/components/Buttons/PrimaryButton'

type Props = {

} & withFormProps

function ProfileGeneral ({ form }: Props) {
  const { handleSubmit } = form
  return (
    <form onSubmit={handleSubmit}>
      <Box mb={3}>
        <Heading>Общая информация</Heading>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12} lg={6}>
            <TextField
              name="firstName"
              label="Имя"
            />
          </Grid>
          <Grid item={true} xs={12} lg={6}>
            <TextField
              name="lastName"
              label="Фамилия"
            />
          </Grid>

          <Grid item={true} xs={12}>
            <TextField
              name="about"
              label="О себе"
              multiline={true}
              rows={16}
            />
          </Grid>

          <Grid item={true} xs={12}>
            <StackSearchField />
          </Grid>

          <Grid item={true} xs={12}>
            <SkillsSearchMultiSelectField />
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Heading>Портфолио</Heading>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <TextField name="github" label="Github link" />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField name="behance" label="Behance link" />
          </Grid>
          <Grid item={true} xs={12}>
            <TextField name="link" label="https://" />
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Heading>Дополнительно</Heading>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12}>
            <PriceField />
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

export default withForm(ProfileGeneral)
