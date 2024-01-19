'use client'

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import gridConfig from '@/theme/grid-config'

const Container = styled.div`
  ${({ theme, fluid }) => !fluid && Object.entries(theme.breakpoints).map(([dim]) => theme.mediaQuery[dim](`
    max-width: ${gridConfig({ theme }).container[dim]};
  `))}

  /* display: flex; */

  ${({ theme, noGutter }) => !noGutter && Object.entries(theme.breakpoints).map(([dim]) => theme.mediaQuery[dim](`
    padding-left: ${theme.rem(gridConfig({ theme }).paddingWidth[dim])};
    padding-right: ${theme.rem(gridConfig({ theme }).paddingWidth[dim])};
  `))}

  margin-right: auto;
  margin-left: auto;

  ${({ debug }) => debug && css`
    background-color: #f5f9fc;
    box-shadow: hsla(203, 50%, 30%, 0.15) 0px 0px 0px 1px inset;
  `}
`

const boolOrObject = PropTypes.oneOfType([PropTypes.bool, PropTypes.object])

Container.propTypes = {
  fluid: PropTypes.bool,
  noGutter: boolOrObject,
  debug: PropTypes.bool,
  children: PropTypes.node,
}

export default Container
