import React from 'react'
import Typography from "@mui/material/Typography"

interface Props {
  readonly children: string
}

function Heading ({ children }: Props) {
  return (
    <Typography>{children}</Typography>
  )
}

export default Heading
