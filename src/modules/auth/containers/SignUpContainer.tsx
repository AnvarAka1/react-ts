import React from 'react'
import { CenteredLayout } from "src/layouts"
import SignUp from '../components/SignUp/SignUp'
import { CLIENT } from 'src/constants/roles'

interface Props {
}

function SignUpContainer (props: Props) {
  return (
    <CenteredLayout title="Регистрация">
      <SignUp
        initialValues={{ role: CLIENT }}
        onSubmit={() => {}}
      />
    </CenteredLayout>
  )
}

export default SignUpContainer
