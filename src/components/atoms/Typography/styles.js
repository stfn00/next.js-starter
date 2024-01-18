import styled from 'styled-components'

export const Typography = styled.p`
  ${({ theme, typo }) => theme.typo(typo || 'paragraphMD')};

  font-weight: ${({ theme }) => theme.styledVariant('weight', {
    default: 400,
    medium: 500,
    bold: 800
  })};
  color: ${({ theme, colorScheme }) => theme.colors[colorScheme].surface.text};

  a {
    background-image: linear-gradient(0deg, currentColor, currentColor);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 100% 1px;
    transition: background-size 0.3s ease-in-out;
    transform: translateZ(0);
    -webkit-font-smoothing: subpixel-antialiased;

    &:hover,
    &:focus {
      background-size: 0% 1px;
      outline-width: 0;
    }
  }

  b,
  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  ol, ul {
    margin-block-start: ${({ theme }) => theme.rem(8)};
    margin-block-end: ${({ theme }) => theme.rem(8)};
    padding-inline-start: ${({ theme }) => theme.rem(16)};
  }

  ol {
    list-style: decimal;
  }

  ul {
    list-style: disc;
  }

  > p:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.rem(8)};
  }
`
