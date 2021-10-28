import React from 'react';

interface Props {
  readonly children: any
}

function BlankLayout ({ children }: Props) {
  return (
    <>{children}</>
  )
}

export default BlankLayout
