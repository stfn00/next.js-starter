'use client'

import { useState, useCallback, useMemo } from 'react'
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

const Visible = ({ children, breakpoints: propsBreakpoints = [] }) => {
  const [currentScreen, setCurrentScreen] = useState(null)

  const breakpoints = useMemo(() => Array.isArray(propsBreakpoints) ? propsBreakpoints : [propsBreakpoints], [propsBreakpoints])

  const setScreen = useCallback(() => {
    const newScreen = getScreen()
    if (currentScreen !== newScreen) {
      setCurrentScreen(newScreen)
    }
  }, [currentScreen])

  setScreen()

  useEventListener('orientationchange', setScreen)
  useEventListener('resize', setScreen)

  const isVisible = useCallback(() => {
    return breakpoints.includes(currentScreen)
  }, [breakpoints, currentScreen])

  return isVisible() ? <>{children}</> : null
}

const stringOrArray = PropTypes.oneOfType([PropTypes.string, PropTypes.array])

Visible.propTypes = {
  breakpoints: stringOrArray,
  children: PropTypes.node,
}

export default Visible
