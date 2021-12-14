import React from 'react'

import { CenteredLayout } from 'src/layouts'
import { CLIENT } from 'src/constants/roles'

import SignUp, { Values } from '../components/SignUp/SignUp'

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
