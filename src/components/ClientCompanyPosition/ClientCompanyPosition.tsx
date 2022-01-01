import React from 'react'

import { PositionType } from 'src/types'

type Props = {
  readonly companyName: string
  readonly position: PositionType
}

function ClientCompanyPosition ({ companyName, position }: Props) {
  return (
    <>{position.name} в {companyName}</>
  )
}

export default ClientCompanyPosition
