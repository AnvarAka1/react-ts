import React from 'react'

import { CenteredLayout } from 'src/layouts'
import { CLIENT } from 'src/constants/roles'

import SignUp from '../components/SignUp'
import { SignUpFieldValuesType } from '../types'

function SignUpContainer () {
  const handleSubmit = (values: SignUpFieldValuesType) => {
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
