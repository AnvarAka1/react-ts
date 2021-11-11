import React from 'react'
import { CenteredLayout } from "src/layouts"
import SignUp from '../components/SignUp/SignUp'

interface Props {
}

function SignUpContainer (props: Props) {
  return (
    <CenteredLayout title="Регистрация">
      <SignUp
        initialValues={{}}
        onSubmit={() =>{}}
      />
    </CenteredLayout>
  )
}

export default SignUpContainer
