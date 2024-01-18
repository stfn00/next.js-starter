'use client'

import { useState } from 'react'
import styled, { css, withTheme } from 'styled-components'
import gridConfig from '@/theme/grid-config'
import Visible from './Visible'

const StyledGridDebuggerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 999;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: auto;
    left: auto;
    right: 0;
    bottom: 0;
    padding: 0 5px 5px 5px;
    margin: 5px;
    background-color: white;
    border: 2px solid black;
    font-size: 50px;
    line-height: 1;
    cursor: pointer;
    pointer-events: all;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #e0e0e0;
    }

    i {
      font-size: 10px;
    }
  }

  ${({ visible }) => visible && css`
    button {
      color: white;
      background-color: black;

      &:hover {
        background-color: #333333;
      }
    }
  `}
`

const StyledGridDebugger = styled.div`
  max-width: 100%;
  display: grid;
  position: absolute;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  inset: 0;

  ${({ theme }) => Object.entries(theme.breakpoints).map(([dim]) => theme.mediaQuery[dim](`
    max-width: ${gridConfig({ theme }).container[dim]};
    grid-template-columns: repeat(${gridConfig({ theme }).columns[dim]}, minmax(0, 1fr));
    grid-gap: ${theme.rem(gridConfig({ theme }).gutterWidth[dim])};
    padding-left: ${theme.rem(gridConfig({ theme }).paddingWidth[dim])};
    padding-right: ${theme.rem(gridConfig({ theme }).paddingWidth[dim])};
  `))}

  span {
    background: lightcoral;
    opacity: 0.1;
  }
`

const GridDebugger = ({ theme }) => {
  const [visible, setVisible] = useState(false)

  const buildColumns = (dim) => new Array(gridConfig({ theme }).columns[dim]).fill(0)

  return (
    <StyledGridDebuggerWrapper visible={visible}>
      <button onClick={() => setVisible(!visible)}>
        <span>&#10041;</span>
        <i>Grid<br />Debugger</i>
      </button>
      {visible ? (
        <StyledGridDebugger>
          {Object.entries(theme.breakpoints).map(([dim], i) => (
            <Visible breakpoints={[dim]} key={i}>
              {buildColumns(dim).map((_, key) => <span key={key} />)}
            </Visible>
          ))}
        </StyledGridDebugger>
      ) : null}
    </StyledGridDebuggerWrapper>
  )
}

export default withTheme(GridDebugger)
