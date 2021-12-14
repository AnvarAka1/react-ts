import React from 'react'
import MuiLink, { LinkProps } from '@mui/material/Link'
import { Link, LinkProps as RouterLinkProps } from 'react-router-dom'

type Props = {
  readonly to: string
  readonly children: React.ReactNode
} & RouterLinkProps & LinkProps

function RouterLink ({ to, children, ...props }: Props) {
  return (
    <MuiLink
      to={to}
      component={Link}
      color={'inherit'}
      underline={'none'}
      {...props}
    >
      {children}
    </MuiLink>
  )
}

export default RouterLink
