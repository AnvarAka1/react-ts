import React from 'react'
import { CenteredLayout } from 'src/layouts'
import SignUp, {Values} from '../components/SignUp/SignUp'
import { CLIENT } from 'src/constants/roles'

function SignUpContainer () {
  const handleSubmit = (values: Values) => {
    localStorage.setItem('auth', JSON.stringify(values))
  }

  return (
    <CenteredLayout title="Регистрация">
      <SignUp
        initialValues={{ role: CLIENT }}
        onSubmit={handleSubmit}
      />
    </CenteredLayout>
  )
}

export default SignUpContainer
