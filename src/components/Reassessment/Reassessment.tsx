import React from 'react'

import TextSecondary from 'src/components/TextSecondary'

type Props = {
  readonly value: boolean
}

function Reassessment ({ value }: Props) {
  const reassessment = value ? 'Возможна переоценка работ' : 'Переоценки работ нет'

  return (
    <TextSecondary>{reassessment}</TextSecondary>
  )
}

export default Reassessment
