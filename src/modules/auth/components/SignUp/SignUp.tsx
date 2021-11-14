import React, { useState } from 'react'
import withForm, { withFormProps } from 'src/components/Form/withForm'
import SignUpGeneral from "./SignUpGeneral"
import SignUpFreelancer from "./SignUpFreelancer"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
type Props = {} & withFormProps

const GENERAL = 'general'
const FREELANCER = 'freelancer'

function SignUp ({ form }: Props) {
  const [step, setStep] = useState(FREELANCER)
  const { handleSubmit } = form

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{ width: 450 }}>
        <CardContent>
          {step === GENERAL && <SignUpGeneral onNextClick={() => setStep(FREELANCER)}/>}
          {step === FREELANCER && <SignUpFreelancer onPrevClick={() => setStep(GENERAL)}/>}
        </CardContent>
      </Card>
    </form>
  )
}

export default withForm(SignUp)
