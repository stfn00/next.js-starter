'use client'

import { SectionThemeContext } from '@/contexts/SectionTheme.context'

import { Container } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography/Typography.component'

import * as S from './Header.styles'

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
