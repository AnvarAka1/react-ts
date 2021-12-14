import { createTheme } from '@mui/material/styles'

import palette from './palette'
import overrides from './overrides'

const theme = createTheme({
  palette: palette(),
  components: overrides()
})

export default theme
