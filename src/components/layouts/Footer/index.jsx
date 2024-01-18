'use client'

import { SectionThemeContext } from '@/contexts/SectionTheme'

import { Container } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'

import * as S from './styles'

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
