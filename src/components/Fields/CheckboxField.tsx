import React from 'react'
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

import FieldWrapper from 'src/components/Fields/FieldWrapper'

type Props = {
  readonly name: string
} & Omit<FormControlLabelProps, 'control'>

function CheckboxField ({ name, label }: Props) {
  return (
    <FieldWrapper name={name} type="checkbox">
      {({ input }) => {
        return (
          <FormControlLabel
            label={label}
            control={(
              <Checkbox
                checked={input.checked}
                onChange={input.onChange}
              />
            )}
          />
        )
      }}
    </FieldWrapper>
  )
}

export default CheckboxField
