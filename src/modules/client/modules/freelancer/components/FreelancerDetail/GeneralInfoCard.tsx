import React from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Box from '@mui/material/Box'
import { Divider } from '@mui/material'
import CardContent from '@mui/material/CardContent'

import Heading from 'src/components/Heading'
import ActivityStatus from 'src/components/Statuses/ActivityStatus'
import { FreelancerType } from 'src/types'
import PaymentMethods from 'src/components/PaymentMethods'
import Rating from 'src/components/Rating/Rating'
import FreelancerPrice from 'src/components/FreelancerPrice/FreelancerPrice'
import FreelancerPortfolio from 'src/components/FreelancerPortfolio'
import PrimaryButton from 'src/components/Buttons/PrimaryButton'

type Props = {
  readonly isRequestSent: boolean
  readonly onRequestCancel: () => Promise<void>
  readonly onRequestDialogOpen: () => void
  readonly freelancer: FreelancerType
}

function GeneralInfoCard (props: Props) {
  const {
    freelancer,
    isRequestSent,
    onRequestCancel,
    onRequestDialogOpen
  } = props

  const {
    status,
    rating,
    price,
    portfolio,
    paymentMethods
  } = freelancer

  return (
    <Card>
      <CardHeader title={(
        <Box display="flex" justifyContent="space-between">
          <Heading>Общие сведения</Heading>
          <ActivityStatus value={status} />
        </Box>
      )}
      />
      <Divider />
      <CardContent>
        <Box mb={2}>
          <Heading>Метод оплаты</Heading>
          <PaymentMethods paymentMethods={paymentMethods} />
        </Box>

        <Box mb={2}>
          <Heading>Рейтинг исполнителя</Heading>
          <Rating value={rating} />
        </Box>

        <Box mb={4}>
          <Heading>Оплата</Heading>
          <FreelancerPrice value={price} />
        </Box>

        <Box mb={2}>
          <Heading>Репозитории / Портфолио</Heading>
          <FreelancerPortfolio portfolio={portfolio} />
        </Box>

        <Divider />

        <Box mt={2}>
          {isRequestSent
            ? (
              <PrimaryButton onClick={onRequestCancel} fullWidth={true}>
                Отменить запрос
              </PrimaryButton>
            )
            : (
              <PrimaryButton onClick={onRequestDialogOpen} fullWidth={true}>
                Отправить запрос
              </PrimaryButton>
            )}

        </Box>
      </CardContent>
    </Card>
  )
}

export default GeneralInfoCard
