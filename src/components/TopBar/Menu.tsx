import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import MuiMenu from '@mui/material/Menu'

interface Props {
  readonly anchorEl: Element | ((element: Element) => Element) | null | undefined,
  readonly isMenuOpen: boolean,
  readonly onMenuClose: () => void,
}

function Menu ({ anchorEl, isMenuOpen, onMenuClose }: Props) {
  return (
    <MuiMenu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted={true}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={onMenuClose}
    >
      <MenuItem onClick={onMenuClose}>Profile</MenuItem>
      <MenuItem onClick={onMenuClose}>My account</MenuItem>
    </MuiMenu>
  )
}

export default Menu
