'use client'

import styled from 'styled-components'
import PropTypes from 'prop-types'

const SpacerBase = styled.div`
  ${({ theme, ...p }) => Object.entries(theme.breakpoints).map(([dim]) => p[dim] && theme.mediaQuery[dim](`
    height: ${theme.spacing(p[dim])};
  `))}
`

const numberOrString = PropTypes.oneOfType([PropTypes.string, PropTypes.number])

SpacerBase.propTypes = {
  xs: numberOrString,
  sm: numberOrString,
  md: numberOrString,
  lg: numberOrString,
  xl: numberOrString,
  xxl: numberOrString
}

export default SpacerBase
