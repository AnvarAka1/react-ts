import React from 'react'
import routes from 'src/modules'
import theme from 'src/theme/theme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../Routes'
import { HelmetProvider } from 'react-helmet-async'

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
