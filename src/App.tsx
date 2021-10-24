import React from 'react'
import routes from './modules'
import theme from './theme/theme'
import ThemeProvider from "@mui/material/styles/ThemeProvider"

function App () {
  return (
    <ThemeProvider theme={theme}>
      {routes().map(route => (
        <route.container key={route.route}>child</route.container>
      ))}
    </ThemeProvider>
  )
}

export default App
