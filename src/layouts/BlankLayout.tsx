import React from 'react';

interface Props {
  readonly children: any
}

function BlankLayout ({ children }: Props) {
  return (
    <>content: {children}</>
  )
}

export default BlankLayout
