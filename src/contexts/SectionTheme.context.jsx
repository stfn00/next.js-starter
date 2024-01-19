'use client'

import { createContext, useContext } from 'react'

export const SectionThemeContext = createContext()

export const useSectionThemeContext = () => {
  const context = useContext(SectionThemeContext)

  if (!context) {
    throw new Error(
      'useSectionThemeContext must be used within a SectionThemeProvider'
    )
  }
  return context
}
