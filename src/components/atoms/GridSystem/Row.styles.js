'use client'

import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import gridConfig from '@/theme/grid-config'

const Row = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;

  ${({ theme, noGutter }) => !noGutter && Object.entries(theme.breakpoints).map(([dim]) => theme.mediaQuery[dim](`
    margin-left: -${theme.rem(gridConfig({ theme }).gutterWidth[dim] / 2)};
    margin-right: -${theme.rem(gridConfig({ theme }).gutterWidth[dim] / 2)};
  `))}

  ${({ theme, reverse }) => reverse && (
    Array.isArray(reverse)
      ? Object.entries(theme.breakpoints).map(([dim]) => theme.mediaQuery[dim](`
          flex-direction: ${reverse.indexOf(dim) !== -1 ? 'row-reverse' : 'row'};
          flex-wrap: ${reverse.indexOf(dim) !== -1 ? 'wrap-reverse' : 'wrap'};
        `))
      : `
        flex-direction: row-reverse;
        flex-wrap: wrap-reverse;
      `
  )}

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

  ${({ debug }) => debug && css`
    background-color: #f5f9fc;
    outline: #fff solid 1px !important;
  `}
`

const boolOrArray = PropTypes.oneOfType([PropTypes.bool, PropTypes.array])
const stringOrObject = PropTypes.oneOfType([PropTypes.string, PropTypes.object])

Row.propTypes = {
  reverse: boolOrArray,
  align: stringOrObject,
  justify: stringOrObject,
  children: PropTypes.node,
  debug: PropTypes.bool,
}

export default Row
