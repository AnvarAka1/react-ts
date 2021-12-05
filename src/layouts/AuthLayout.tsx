import React from 'react'

interface Props {
  readonly children: React.ReactNode
}

function AuthLayout ({ children }: Props) {
  return (
    <>{children}</>
  )
}

export default AuthLayout
