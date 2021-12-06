import React from 'react'
import MuiAvatar from '@mui/material/Avatar'

interface Props {
  readonly src: string
  readonly alt: string
}

function Avatar ({ src, alt, ...props }: Props) {
  return (
    <MuiAvatar
      variant={'circular'}
      src={src}
      alt={alt}
      {...props}
    />
  )
}

export default Avatar
