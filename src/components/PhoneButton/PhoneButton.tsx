import React from 'react'
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded'
import IconButton from '@mui/material/IconButton'

type Props = {
  readonly phone: string | null
  readonly onClick: (event: React.MouseEvent, phone: string | null) => void
}

function PhoneButton ({ phone, onClick }: Props) {
  const handlePhoneClick = (event: React.MouseEvent) => {
    onClick(event, phone)
  }

  return (
    <IconButton onClick={handlePhoneClick}>
      <LocalPhoneRoundedIcon />
    </IconButton>
  )
}

export default PhoneButton
