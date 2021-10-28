import React from 'react'

interface Props {
  readonly children: any
}

function AuthLayout ({ children }: Props) {
  return (
    <>{children}</>
  )
}

export default AuthLayout
