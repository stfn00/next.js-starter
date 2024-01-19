'use client'

import { SectionThemeContext } from '@/contexts/SectionTheme.context'

import { Container } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography/Typography.component'

import * as S from './Footer.styles'

const Footer = () => {
  return (
    <SectionThemeContext.Provider value="light">
      <S.Footer as={Container} forwardedAs="footer">
        <Typography content="Footer" />
      </S.Footer>
    </SectionThemeContext.Provider>
  )
}

export default Footer
