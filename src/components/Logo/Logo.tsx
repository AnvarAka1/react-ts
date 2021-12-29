import React from 'react'
import { styled } from '@mui/material/styles'

import Image, { ImageProps } from 'src/components/Image/Image'

import LogoImg from './logo.png'

const LogoImage = styled(Image)`
  width: 48px;
  height: 35px
`

type Props = Omit<ImageProps, 'src' | 'alt'>

function Logo (props: Props) {
  return (
    <LogoImage
      src={LogoImg}
      alt="Worklance"
      {...props}
    />
  )
}

export default Logo
