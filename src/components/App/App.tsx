import React from 'react'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import theme from 'src/theme/theme'
import routes from 'src/modules'

import Routes from '../Routes'

function App () {
  return (
    <BrowserRouter>
      <CssBaseline />
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <Routes routes={routes()} />
        </ThemeProvider>
      </HelmetProvider>
    </BrowserRouter>
  )
}

export default App
