import React from 'react'

import { CenteredLayout } from 'src/layouts'

import SignIn from '../components/SignIn/SignIn'

function SignInContainer () {
  return (
    <CenteredLayout title="Авторизация">
      <SignIn />
    </CenteredLayout>
  )
}

export default SignInContainer
