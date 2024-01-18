import { useSectionThemeContext } from '@/contexts/SectionTheme'

import * as S from './styles'

const Typography = ({ children, content, ...props }) => {
  const colorScheme = useSectionThemeContext()

  const renderContent = () =>
    typeof children === 'string' ? (
      <S.Typography
        {...props}
        colorScheme={colorScheme}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    ) : (
      <S.Typography {...props} colorScheme={colorScheme}>
        {content || children}
      </S.Typography>
    )

  return renderContent()
}

export default Typography
