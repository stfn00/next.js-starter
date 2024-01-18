import styled, { css } from 'styled-components'

export const Icon = styled.i`
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.styledVariant('size', {
    small: theme.rem(12),
    medium: theme.rem(14),
    default: theme.rem(16),
    big: theme.rem(24),
    huge: theme.rem(32),
    large: theme.rem(48),
  })};

  svg {
    width: 1em;
    height: 1em;

    ${({ unlockedProportions }) => unlockedProportions && css`
        height: auto;
        width: auto;
    `}
  }

  path {
    ${({ useIconColor, color = 'currentColor' }) => !useIconColor && css`
      fill: ${color};
    `}
  }

  ${({ round, theme }) => round && css`
    padding: ${theme.rem(8)};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.commons.boxShadow};
    border-radius: 50%;
  `}
`
