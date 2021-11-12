import React from 'react'
import FieldWrapper from "src/components/Fields/FieldWrapper"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

interface Props {
  readonly name: string
  readonly label: string | React.ReactNode | undefined
}

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
