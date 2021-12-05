import React from 'react'
import FieldWrapper from "src/components/Fields/FieldWrapper"
import FormControlLabel, { FormControlLabelProps } from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

type Props = {
  readonly name: string
} & Omit<FormControlLabelProps, 'control'>


function CheckboxField ({ name, label }: Props) {
  return (
    <FieldWrapper name={name}>
      {({ input }) => (
        <FormControlLabel
          label={label}
          control={(
            <Checkbox
              checked={Boolean(input.value)}
              onChange={input.onChange}
            />
          )}
        />
      )}
    </FieldWrapper>
  )
}

export default CheckboxField
