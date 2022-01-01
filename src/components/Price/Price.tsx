import React from 'react'

import { PriceType } from 'src/types'

type Props = {
  readonly value: PriceType
}

function Price ({ value }: Props) {
  return (
    <>{value.price}&nbsp;{value.currency}</>
  )
}

export default Price
