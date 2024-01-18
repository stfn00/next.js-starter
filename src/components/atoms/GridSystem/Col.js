'use client'

import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import gridConfig from '@/theme/grid-config'

const Col = styled.div`
  max-width: 100%;
  display: flex;

  ${({ theme, $direction }) => {
    if ($direction) {
      return typeof $direction === 'object'
        ? Object.entries(theme.breakpoints).map(([dim]) => $direction[dim] && theme.mediaQuery[dim](`
            flex-direction: ${$direction[dim]};
          `))
        : `flex-direction: ${$direction};`
    }
    return 'flex-direction: column;'
  }};

  flex: 1 0 0%;
  box-sizing: border-box;

  ${({ theme, ...p }) => Object.entries(theme.breakpoints).map(([dim]) => p[dim] && theme.mediaQuery[dim](`
    flex: 1 1 ${(p[dim] / gridConfig({ theme }).columns[dim]) * 100}%;
    max-width: ${(p[dim] / gridConfig({ theme }).columns[dim]) * 100}%;
  `))}

  ${({ theme, align }) => align && (
    typeof align === 'object'
      ? Object.entries(theme.breakpoints).map(([dim]) => align[dim] && theme.mediaQuery[dim](`
          align-items: ${align[dim]};
        `))
      : `align-items: ${align};`
  )}

  ${({ theme, justify }) => justify && (
    typeof justify === 'object'
      ? Object.entries(theme.breakpoints).map(([dim]) => justify[dim] && theme.mediaQuery[dim](`
          justify-content: ${justify[dim]};
        `))
      : `justify-content: ${justify};`
  )}

  ${({ theme, $order }) => $order && (
    typeof $order === 'object'
      ? Object.entries(theme.breakpoints).map(([dim]) => $order[dim] && theme.mediaQuery[dim](`
          order: ${$order[dim]};
        `))
      : `order: ${$order};`
  )}

  ${({ theme, reverse }) => reverse && (
    Array.isArray(reverse)
      ? Object.entries(theme.breakpoints).map(([dim]) => theme.mediaQuery[dim](`
          flex-direction: ${reverse.indexOf(dim) !== -1 ? 'column-reverse' : 'column'};
        `))
      : 'flex-direction: column-reverse;'
  )}

  ${({ theme, noGutter }) => !noGutter && Object.entries(theme.breakpoints).map(([dim]) => theme.mediaQuery[dim](`
    padding-left: ${theme.rem(gridConfig({ theme }).gutterWidth[dim] / 2)};
    padding-right: ${theme.rem(gridConfig({ theme }).gutterWidth[dim] / 2)};
  `))}

  ${({ theme, $offset }) => $offset && Object.entries(theme.breakpoints).map(([dim]) => theme.mediaQuery[dim](
    typeof $offset === 'object'
      ? $offset[dim] && `margin-left: ${($offset[dim] / gridConfig({ theme }).columns[dim]) * 100}%;`
      : `margin-left: ${($offset / gridConfig({ theme }).columns[dim]) * 100}%;`
  ))}

  ${({ theme, offsetRight }) => offsetRight && Object.entries(theme.breakpoints).map(([dim]) => theme.mediaQuery[dim](
    typeof offsetRight === 'object'
      ? offsetRight[dim] && `margin-right: ${(offsetRight[dim] / gridConfig({ theme }).columns[dim]) * 100}%;`
      : `margin-right: ${(offsetRight / gridConfig({ theme }).columns[dim]) * 100}%;`
  ))}
  
  ${({ debug }) => debug && css`
    background-color: #e1e9f0;
    box-shadow: hsla(203, 50%, 30%, 0.15) 0px 0px 0px 1px inset;
  `}
`

const numberOrString = PropTypes.oneOfType([PropTypes.string, PropTypes.number])
const stringOrObject = PropTypes.oneOfType([PropTypes.string, PropTypes.object])
const numberOrObject = PropTypes.oneOfType([PropTypes.number, PropTypes.object])
const boolOrArray = PropTypes.oneOfType([PropTypes.bool, PropTypes.array])

Col.propTypes = {
  xs: numberOrString,
  sm: numberOrString,
  md: numberOrString,
  lg: numberOrString,
  xl: numberOrString,
  xxl: numberOrString,
  $direction: stringOrObject,
  align: stringOrObject,
  justify: stringOrObject,
  $order: numberOrObject,
  $offset: numberOrObject,
  offsetRight: numberOrObject,
  reverse: boolOrArray,
  noGutter: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Col
