import React from 'react'

import { CenteredLayout } from 'src/layouts'
import { SignInValuesType } from 'src/modules/auth/types'
import { useSignIn } from 'src/modules/auth/hooks'

import SignIn from '../components/SignIn/SignIn'

function SignInContainer () {
  const signIn = useSignIn()

  const handleSubmit = async (values: SignInValuesType) =>
    signIn.create(values)

  return (
    <CenteredLayout title="Авторизация">
      <SignIn onSubmit={handleSubmit} />
    </CenteredLayout>
  )
}

export default SignInContainer
