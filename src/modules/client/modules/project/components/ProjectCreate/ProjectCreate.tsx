import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import PageContainer from 'src/components/PageContainer'
import withForm, { withFormProps } from 'src/components/Form/withForm'
import Heading from 'src/components/Heading'
import TextField from 'src/components/Fields/TextField'
import StackSearchField from 'src/components/Fields/StackSearchField'
import SkillsSearchMultiSelectField from 'src/components/Fields/SkillsSearchMultiSelectField'
import PriceField from 'src/components/Fields/PriceField'
import PrimaryButton from 'src/components/Buttons/PrimaryButton'
import FileField from 'src/components/Fields/FileField'
import CheckboxField from 'src/components/Fields/CheckboxField'
import PaymentMethodsField from 'src/components/Fields/PaymentMethodsField'

type Props = withFormProps

function ProjectCreate ({ form }: Props) {
  const { handleSubmit } = form

  return (
    <form onSubmit={handleSubmit}>
      <PageContainer>
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12} lg={5}>
            <Heading>Создать новый проект</Heading>
            <Grid container={true} spacing={3}>
              <Grid item={true} xs={12}>
                <TextField
                  name="name"
                  label="Название проекта"
                />
              </Grid>
              <Grid item={true} xs={12}>
                <TextField
                  name="description"
                  label="Описание проекта"
                  multiline={true}
                  rows={8}
                />
              </Grid>

              <Grid item={true} xs={12}>
                <TextField
                  name="requirement"
                  label="Требование для проекта"
                  multiline={true}
                  rows={6}
                />
              </Grid>

              <Grid item={true} xs={12}>
                <StackSearchField />
              </Grid>

              <Grid item={true} xs={12}>
                <SkillsSearchMultiSelectField />
              </Grid>

              <Grid item={true} xs={12}>
                <FileField
                  name="file"
                  label="Прикрепить файл"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item={true} xs={12} lg={6}>
            <Box mb={3}>
              <Heading>Дополнительно</Heading>
              <Grid container={true} spacing={3}>

                <Grid item={true} xs={12}>
                  <Typography variant={'subtitle2'}>Метод оплаты</Typography>
                  <PaymentMethodsField name="paymentMethods" />
                </Grid>

                <Grid item={true} xs={12}>
                  <Typography variant={'subtitle2'}>Сверхурочные</Typography>
                  <CheckboxField name="overwork" label="Имеются" />
                </Grid>

                <Grid item={true} xs={12}>
                  <Typography variant={'subtitle2'}>Стоимость</Typography>
                  <PriceField />
                  <Box mt={1}>
                    <CheckboxField
                      name="reassessment"
                      label="Возможность переоценки стоимости работ"
                    />
                  </Box>
                </Grid>

                <Grid item={true} xs={12}>
                  <TextField
                    name="requirement"
                    label="Комментарии автора (160 символов)а"
                    multiline={true}
                    inputProps={{ maxLength: 160 }}
                    rows={4}
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

          </Grid>
        </Grid>
      </PageContainer>
    </form>
  )
}

export default withForm(ProjectCreate)
