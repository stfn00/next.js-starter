'use client'

import { ThemeProvider } from 'styled-components'
import { theme, helpers } from '@/theme'

export default ({ children }) => (
  <ThemeProvider theme={{ ...theme, ...helpers }}>{children}</ThemeProvider>
)
