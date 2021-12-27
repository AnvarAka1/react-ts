import React from 'react'
import Rating from '@mui/material/Rating'

type Props = {
  readonly value: number
}

function Stars (props: Props) {
  const {
    value = 0,
    ...rest
  } = props

  return (
    <Rating
      value={value}
      readOnly={true}
      {...rest}
    />
  )
}

export default Stars
