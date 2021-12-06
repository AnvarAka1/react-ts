import React from 'react'
import { Helmet } from 'react-helmet-async'

interface Props {
  readonly children: React.ReactNode,
  readonly title: string | React.ReactNode
}

function HtmlLayout (props: Props) {
  const {
    children,
    title = 'Worklance'
  } = props

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="Worklance on TypeScript" />
      </Helmet>
      {children}
    </>
  )
}

export default HtmlLayout
