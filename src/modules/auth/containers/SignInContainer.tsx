import React from 'react'
import SignIn from '../components/SignIn/SignIn'
import { CenteredLayout } from 'src/layouts'

function SignInContainer () {
  return (
    <CenteredLayout title="Авторизация">
      <SignIn />
    </CenteredLayout>
  )
}

export default SignInContainer
