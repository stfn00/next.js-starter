import { useMemo } from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'

import * as S from './Icon.styles'

const getIcon = (name) => {
  const Icon = dynamic(() => import(`@/components/atoms/Icon/glyphs/${name}.svg`), {
    ssr: false
  })
  return Icon
}

const Icon = ({ name, ariaLabel = name.replaceAll('-', ' '), ...props }) => {
  const SvgIcon = useMemo(() => getIcon(name), [name])

  return (
    <S.Icon {...props} aria-label={ariaLabel}>
      <SvgIcon />
    </S.Icon>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
}

export default Icon
