import React from 'react'
import MuiLink, { LinkProps } from '@mui/material/Link'
import { Link, LinkProps as RouterLinkProps, useLocation } from 'react-router-dom'
import { css, styled } from '@mui/material/styles'
import { nth, pipe, split } from 'ramda'

type Props = {
  readonly to: string
  readonly children: React.ReactNode
} & RouterLinkProps & LinkProps

type CustomProps = {
  readonly active?: boolean
}

type HoverableRouterLinkProps = CustomProps & RouterLinkProps & LinkProps

const getBaseUrlFromTo = pipe<
  [string],
  string[],
  string | undefined
  >(
    split('?'),
    nth(0)
  )

const HoverableRouterLink = styled(MuiLink)<HoverableRouterLinkProps>`
  ${({ theme, active }) => css`
    transition: color .25s ease;
    color: ${active ? theme.palette.primary.main : 'inherit'};
    &:hover {
      color: ${theme.palette.primary.main}
    }
  `}
`

function ActiveRouterLink ({ to, children, ...props }: Props) {
  const location = useLocation()
  const pathname = location.pathname

  const active = pathname === getBaseUrlFromTo(to)

  return (
    <HoverableRouterLink
      component={Link}
      to={to}
      active={active}
      color={'inherit'}
      underline={'none'}
      {...props}
    >
      {children}
    </HoverableRouterLink>
  )
}

export default ActiveRouterLink
