import React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const ImageWrapper = styled(Box)`
  display: block;
  & > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`

const Blank = styled(Box)`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: transparent
`

export type ImageProps = {
  readonly src: string
  readonly alt: string
  readonly width?: string | number
  readonly height?: string | number
} & BoxProps

function Image ({ src, alt, width, height, ...props }: ImageProps) {
  return (
    <ImageWrapper
      width={width}
      height={height}
      {...props}
    >
      {src ? <img src={src} alt={alt} /> : <Blank />}
    </ImageWrapper>
  )
}

export default Image
