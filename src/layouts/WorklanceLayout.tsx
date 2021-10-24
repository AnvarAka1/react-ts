import React from 'react'
import HtmlLayout from "./HtmlLayout"
import TopBar from '../components/TopBar'

interface Props {
  readonly children: any,
  readonly title: string | React.ReactNode
}

function WorklanceLayout ({ children, title }: Props) {
  return (
    <HtmlLayout title={title}>
      <TopBar />
      {children}
    </HtmlLayout>
  )
}

export default WorklanceLayout
