import React from 'react'
import WorklanceLayout from "src/layouts/WorklanceLayout"

interface Props {
  readonly children: any
}

function SignInContainer ({ children }: Props) {
  return (
    <WorklanceLayout title="hello">content: {children}</WorklanceLayout>
  )
}

export default SignInContainer
