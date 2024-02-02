import styled, { css } from 'styled-components'

export const ButtonLabel = styled.span`
  font-weight: 400;
  letter-spacing: 0.08em;
  pointer-events: none;
  z-index: 1;
`

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme, colorScheme, variant }) => theme.colors[colorScheme].button[variant].text};
  background-color: ${({ theme, colorScheme, variant }) => theme.colors[colorScheme].button[variant].background};
  border: ${({ theme, colorScheme, variant }) => theme.styledVariant('variant', {
    primary: `1px solid ${theme.colors[colorScheme].button[variant].border}`,
    secondary: '0',
  })};
  padding: ${({ theme }) => theme.styledVariant('variant', {
    primary: theme.rem(8, 16),
    secondary: '0',
  })};
  ${({ variant }) => (variant === 'secondary') && css`
    background-image: linear-gradient(0deg, currentColor, currentColor);
    background-position: left 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
  `}

  box-shadow: 0 0 0 0;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  transition:
    background ${({ theme }) => theme.timing.normal},
    color ${({ theme }) => theme.timing.normal},
    border-color ${({ theme }) => theme.timing.normal},
    box-shadow ${({ theme }) => theme.timing.normal};

  &:not([disabled]),
  &:not([aria-disabled="true"]) {
    // HOVER
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
      &:hover {
        color: ${({ theme, colorScheme, variant }) => theme.colors[colorScheme].button[variant].hover.text};
        background-color: ${({ theme, colorScheme, variant }) => theme.colors[colorScheme].button[variant].hover.background};
  border: ${({ theme, colorScheme, variant }) => theme.styledVariant('variant', {
    primary: `1px solid ${theme.colors[colorScheme].button[variant].hover.border}`,
    secondary: '0',
  })};

        ${({ variant, $label, iconEnd }) => (variant === 'secondary' && $label) && css`
          background-size: ${iconEnd ? 'calc(100% - 18px)' : '100%'} 1px;
          outline-width: 0;
        `}
      }
    }
  
    // FOCUS
    &:focus-visible {
      ${({ theme, colorScheme, variant }) => css`
        box-shadow: 0 0 0 ${theme.rem(4)} ${theme.colors[colorScheme].button[variant].focus.shadow};
      `}
    }
  
    // ACTIVE and ARIA CURRENT
    &:active,
    &[aria-current="true"] {
      
    }
  }

  // DISABLED
  &[disabled],
  &[aria-disabled="true"] {
    color: ${({ theme, colorScheme, variant }) => theme.colors[colorScheme].button[variant].disabled.text};
    background-color: ${({ theme, colorScheme, variant }) => theme.colors[colorScheme].button[variant].disabled.background};
    border: ${({ theme, colorScheme, variant }) => theme.styledVariant('variant', {
    primary: `1px solid ${theme.colors[colorScheme].button[variant].disabled.border}`,
    secondary: '0',
  })};
    pointer-events: none;
    cursor: not-allowed;
  }

  // ICON
  & > i {
    pointer-events: none;
  }

  ${ButtonLabel} {
    ${({ theme, typo }) => theme.typo(typo || 'paragraphSM')};
    margin-right: ${({ theme, iconEnd }) => iconEnd ? theme.rem(4) : '0'};
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
`
