import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Divider } from '@mui/material'
import { styled } from '@mui/material/styles'

import Subtext from 'src/components/Text/Subtext'
import RouterLink from 'src/components/RouterLink'
import Image from 'src/components/Image/Image'

const HoverableLink = styled(RouterLink)`
  transition: background .25s ease;
  &:hover {
    background: #f1f1f1
  }
`

type Props = {
  readonly imagePath: string
  readonly primary: string
  readonly secondary?: string
  readonly path: string
}

function Category ({ primary, secondary, imagePath, path }: Props) {
  return (
    <HoverableLink display={'flex'} to={path} sx={{ pt: 1 }}>
      <Image
        width={16}
        height={16}
        src={imagePath}
        alt={primary}
      />
      <Box width="100%">
        <Typography>{primary}</Typography>
        <Subtext>{secondary}</Subtext>
        <Divider sx={{ mt: 1 }} />
      </Box>
    </HoverableLink>
  )
}

export default Category
