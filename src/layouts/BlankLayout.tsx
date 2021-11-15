import React from 'react';

interface Props {
  readonly children: React.ReactNode
}

function BlankLayout ({ children }: Props) {
  return (
    <>{children}</>
  )
}

export default BlankLayout
