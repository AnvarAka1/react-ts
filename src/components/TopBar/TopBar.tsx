import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import AccountCircle from '@mui/icons-material/AccountCircle'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import Container from '@mui/material/Container'

import * as ROUTES from 'src/constants/routes'
import Logo from 'src/components/Logo'
import RouterLink from 'src/components/RouterLink'
import ActiveRouterLink from 'src/components/RouterLink/ActiveRouterLink'

import Menu from './Menu'

function TopBar () {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const menuId = 'primary-search-account-menu'

  return (
    <Box>
      <AppBar variant="outlined" position="static" sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              width="100%"
              color="#9CABCD"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                <RouterLink to={ROUTES.HOME_PATH}>
                  <Logo />
                </RouterLink>
                <Box display="flex" ml={3}>
                  <ActiveRouterLink to={ROUTES.PROJECT_LIST_PATH}>
                    Публикации
                  </ActiveRouterLink>
                  <ActiveRouterLink to={ROUTES.FREELANCER_LIST_PATH} sx={{ ml: 2 }}>
                    Исполнители
                  </ActiveRouterLink>
                </Box>
              </Box>
              <Box>
                <Box display="flex" sx={{ gap: '16px' }}>
                  <IconButton size="large" color="inherit">
                    <SearchIcon />
                  </IconButton>
                  <IconButton size="large" color="inherit">
                    <Badge badgeContent={4} color="error">
                      <PeopleOutlinedIcon />
                    </Badge>
                  </IconButton>
                  <IconButton size="large" color="inherit">
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      size="large"
                      edge="end"
                      aria-controls={menuId}
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Menu
        isMenuOpen={isMenuOpen}
        anchorEl={anchorEl}
        onMenuClose={handleMenuClose}
      />
    </Box>
  )
}

export default TopBar
