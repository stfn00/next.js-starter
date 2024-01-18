import React, { useContext } from 'react'
import { SectionThemeContext } from '@/contexts/SectionTheme'

import * as S from './styles'

const Typography = ({ children, content, inheritedColorScheme, ...props }) => {
  const { selectedColorScheme = inheritedColorScheme || 'light' } = useContext(SectionThemeContext) || {}

  const renderContent = () =>
    typeof children === 'string' ? (
      <S.Typography
        {...props}
        colorScheme={selectedColorScheme}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    ) : (
      <S.Typography {...props} colorScheme={selectedColorScheme}>
        {content || children}
      </S.Typography>
    )

  return renderContent()
}

export default Typography
