'use client'

import { SectionThemeContext } from '@/contexts/SectionTheme'

import { Container } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'

import * as S from './styles'

const Header = () => {
  return (
    <SectionThemeContext.Provider value="light">
      <S.Header as={Container} forwardedAs="header">
        <Typography content="Header" />
      </S.Header>
    </SectionThemeContext.Provider>
  )
}

export default Header
