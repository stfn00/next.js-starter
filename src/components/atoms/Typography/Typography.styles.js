import styled from 'styled-components'

export const Typography = styled.p`
  ${({ theme, typo }) => theme.typo(typo || 'paragraphMD')};

  font-weight: ${({ theme }) => theme.styledVariant('weight', {
    default: 400,
    light: 300,
    medium: 500,
    semibold: 700,
    bold: 800
  })};
  color: ${({ theme, colorScheme }) => theme.colors[colorScheme].surface.text};

  a {
    text-decoration: none;
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
  }

  ol {
    list-style: decimal;
    padding-inline-start: ${({ theme }) => theme.rem(32)};
  }

  ul {
    list-style: disc;
    padding-inline-start: ${({ theme }) => theme.rem(16)};
  }

  > p:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.rem(8)};
  }
`
