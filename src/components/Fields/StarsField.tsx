import React from 'react'
import Rating from '@mui/material/Rating'

import FieldWrapper, { FieldWrapperProps } from 'src/components/Fields/FieldWrapper'

type Props = {
} & FieldWrapperProps

function StarsField ({ name, ...props }: Props) {
  return (
    <FieldWrapper name={name}>
      {({ input }) => (
        <Rating
          value={parseInt(input.value as string)}
          onChange={input.onChange}
          {...props}
        />
      )}
    </FieldWrapper>
  )
}

export default StarsField
