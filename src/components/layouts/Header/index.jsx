'use client'

import { Container } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'

import * as S from './styles'

const Header = () => {
  return (
    <S.Header as={Container} forwardedAs="header">
      <Typography content="Header" />
    </S.Header>
  )
}

export default Header
