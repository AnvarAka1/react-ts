import React from 'react'
import { Divider } from '@mui/material'
import Box, { BoxProps } from '@mui/material/Box'
import { css, styled } from '@mui/material/styles'

import Heading from 'src/components/Heading'
import { ProjectType } from 'src/types'
import TextOverflow from 'src/components/TextOverflow'

type Props = {
  readonly item: ProjectType
  readonly onClick: (event: React.MouseEvent) => void
  readonly active?: boolean
} & BoxProps

const ProjectItemBox = styled(Box)<{ readonly active?: boolean} & BoxProps>`
  ${({ theme, active }) => css`
    padding: 8px 24px;
    cursor: pointer;
    transition: .25s ease background;
    background-color: ${active ? `${theme.palette.primary.main}40` : 'inherit'};
    &:hover {
      background: ${theme.palette.primary.main}20
    }
  `}
`

function AvailableProjectItem ({ item, active, onClick }: Props) {
  return (
    <>
      <ProjectItemBox onClick={onClick} active={active} >
        <Heading>{item.name}</Heading>
        <TextOverflow>{item.description}</TextOverflow>
      </ProjectItemBox>
      <Divider />
    </>
  )
}

export default AvailableProjectItem
