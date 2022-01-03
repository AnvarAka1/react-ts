import React from 'react'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import { DialogActions, DialogContent, DialogTitle } from '@mui/material'

import TextSecondary from 'src/components/TextSecondary'
import TextField from 'src/components/Fields/TextField'
import PrimaryButton from 'src/components/Buttons/PrimaryButton'
import withForm, { withFormProps } from 'src/components/Form/withForm'

type Props = Omit<DialogProps, 'onSubmit'> & withFormProps

function RequestDialogForm ({ open, onClose, form }: Props) {
  const { handleSubmit } = form

  return (
    <Dialog
      open={open}
      maxWidth="sm"
      fullWidth={true}
      onClose={onClose}
    >
      <DialogTitle>
        Замотивируйте автора
        <TextSecondary>
          Здесь Вы можете написать Ваши основные приемущества,
          чтобы выделиться от других разработчиков
        </TextSecondary>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            name="requestMessage"
            placeholder="Пишите здесь"
            multiline={true}
            rows={16}
          />
        </DialogContent>
        <DialogActions>
          <PrimaryButton type="submit">
            Отправить запрос
          </PrimaryButton>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default withForm(RequestDialogForm)
