import React from 'react'
import Button, { ButtonProps } from "@mui/material/Button"

type Props = {
  readonly children: any
} & ButtonProps

function PrimaryButton ({ children, ...props }: Props) {
  return (
    <Button
      type="button"
      color="primary"
      variant="contained"
      {...props}
    >
      {children}
    </Button>
  )
}

export default PrimaryButton
