import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import { Divider } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import Heading from 'src/components/Heading'
import { ProjectType } from 'src/types'
import PaymentMethods from 'src/components/PaymentMethods'
import Rating from 'src/components/Rating/Rating'
import PrimaryButton from 'src/components/Buttons/PrimaryButton'
import Price from 'src/components/Price/Price'
import ProjectStatus from 'src/components/Statuses/ProjectStatus'
import Overwork from 'src/components/Overwork/Overwork'
import Avatar from 'src/components/Avatar'
import ClientCompanyPosition from 'src/components/ClientCompanyPosition'
import PhoneButton from 'src/components/PhoneButton'
import Reassessment from 'src/components/Reassessment'
import TextSecondary from 'src/components/TextSecondary'

type Props = {
  readonly project: ProjectType
  readonly isRequestSent: boolean
  readonly onRequestDialogOpen: () => void
  readonly onRequestCancel: () => Promise<void>
}

function GeneralInfoCard ({ project, isRequestSent, onRequestDialogOpen, onRequestCancel }: Props) {
  const {
    paymentMethods,
    price,
    additionalComment,
    overwork,
    status,
    reassessment,
    client
  } = project

  const {
    avatar,
    fullName,
    phone,
    position,
    companyName,
    rating
  } = client

  const handlePhoneClick = () => {

  }

  return (
    <Card>
      <CardHeader title={(
        <Box display="flex" justifyContent="space-between">
          <Heading>Общие сведения</Heading>
          <ProjectStatus value={status} />
        </Box>
      )}
      />
      <Divider />
      <CardContent>
        <Box mb={2}>
          <Typography variant="subtitle2" gutterBottom={true}>
            Автор публикации
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex">
              <Avatar src={avatar} alt={fullName} />
              <Box ml={2}>
                <Typography>{fullName}</Typography>
                <Typography variant="subtitle2">
                  <ClientCompanyPosition
                    companyName={companyName}
                    position={position}
                  />
                </Typography>
              </Box>
            </Box>

            <PhoneButton
              phone={phone}
              onClick={handlePhoneClick}
            />
          </Box>
        </Box>
        <Box mb={2}>
          <Heading>Метод оплаты</Heading>
          <PaymentMethods paymentMethods={paymentMethods} />
        </Box>

        <Box mb={2}>
          <Heading>Сверхурочные</Heading>
          <Overwork value={overwork} />
        </Box>

        <Box mb={2}>
          <Heading>Рейтинг автора</Heading>
          <Rating value={rating} />
        </Box>

        <Box mb={2}>
          <Heading>Комментарии от автора</Heading>
          <TextSecondary>{additionalComment}</TextSecondary>
        </Box>

        <Divider />

        <Box mb={4} mt={2}>
          <Heading>Стоимость: <Price value={price} /></Heading>
          <Reassessment value={reassessment} />
        </Box>

        <Box mt={2}>
          {isRequestSent
            ? (
              <PrimaryButton
                type="button"
                fullWidth={true}
                variant="outlined"
                onClick={onRequestCancel}
              >
                Отменить запрос
              </PrimaryButton>
            )
            : (
              <PrimaryButton
                type="button"
                onClick={onRequestDialogOpen}
                fullWidth={true}
              >
                Отправить запрос
              </PrimaryButton>
            )}

        </Box>
      </CardContent>
    </Card>
  )
}

export default GeneralInfoCard
