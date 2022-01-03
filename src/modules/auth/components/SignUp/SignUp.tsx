import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import withForm, { withFormProps } from 'src/components/Form/withForm'

import SignUpGeneral from './SignUpGeneral'
import SignUpClient from './SignUpClient'
import SignUpFreelancer from './SignUpFreelancer'

export interface GeneralValues {
  readonly firstName?: string
  readonly lastName?: string
  readonly email?: string
  readonly password?: string
  readonly confirmPassword?: string
  readonly role: string
  readonly agree?: string
}

export interface FreelancerValues {
  readonly stack?: number
  readonly phone?: string
  readonly about?: string
}

export type Values = GeneralValues & FreelancerValues

type Props = Record<string, unknown> & withFormProps

const GENERAL = 'general'
const FREELANCER = 'freelancer'
const CLIENT = 'client'

function SignUp ({ form }: Props) {
  const [step, setStep] = useState(GENERAL)
  const { handleSubmit } = form

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ width: 450 }}>
        <CardContent>
          {step === GENERAL && <SignUpGeneral onNextClick={setStep} />}
          {step === FREELANCER && <SignUpFreelancer onPrevClick={() => setStep(GENERAL)} />}
          {step === CLIENT && <SignUpClient onPrevClick={() => setStep(GENERAL)} />}
        </CardContent>
      </Card>
    </form>
  )
}

export default withForm(SignUp)
