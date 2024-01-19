'use client'

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useEventListener from '@/hooks/useEventListener'
import { theme } from '@/theme/index'

const getViewPort = () => (typeof window !== 'undefined' && window.innerWidth) || null

const getScreen = () => {
  const breakpoints = Object.values(theme.breakpoints)
  const viewport = getViewPort()

  if (!viewport) {
    return undefined
  }

  let screenClassIndex = breakpoints.findIndex((breakpoint) => viewport < breakpoint)

  if (screenClassIndex === -1) {
    screenClassIndex = breakpoints.length - 1
  }

  const screenClass = Object.keys(theme.breakpoints)[screenClassIndex]

  console.log(screenClass)

  return screenClass
}

const Visible = ({ children, breakpoints = [] }) => {
  const [currentScreen, setCurrentScreen] = useState(null)

  const setScreen = () => {
    const newScreen = getScreen()
    if (currentScreen !== newScreen) {
      setCurrentScreen(newScreen)
    }
  }

  useEffect(() => {
    setScreen()
  }, [])

  useEventListener('orientationchange', setScreen)
  useEventListener('resize', setScreen)

  const isVisible = () => {
    if (Array.isArray(breakpoints)) {
      return breakpoints.includes(currentScreen)
    } else if (typeof breakpoints === 'string') {
      return breakpoints === currentScreen
    }

    return false
  }

  return isVisible() ? <>{children}</> : null
}

const stringOrArray = PropTypes.oneOfType([PropTypes.string, PropTypes.array])

Visible.propTypes = {
  breakpoints: stringOrArray,
  children: PropTypes.node,
}

export default Visible
