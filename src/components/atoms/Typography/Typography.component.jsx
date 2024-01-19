import PropTypes from 'prop-types'

import { useSectionThemeContext } from '@/contexts/SectionTheme.context'

import * as S from './Typography.styles'

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

Typography.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
}

export default Typography
