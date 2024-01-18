'use client'

import { Container } from '@/components/atoms/GridSystem'
import Typography from '@/components/atoms/Typography'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer as={Container} forwardedAs="footer">
      <Typography content="Footer" />
    </S.Footer>
  )
}

export default Footer
