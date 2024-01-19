import { useMemo } from 'react'
import dynamic from 'next/dynamic'

import * as S from './styles'

const getIcon = (name) => {
  const Icon = dynamic(() => import(`@/components/atoms/Icon/glyphs/${name}.svg`), {
    ssr: false
  })
  return Icon
}

const Icon = ({ name, ariaLabel, ...props }) => {
  const SvgIcon = useMemo(() => getIcon(name), [name])

  return SvgIcon ? (
    <S.Icon {...props} aria-label={ariaLabel || name.replaceAll('-', ' ')}>
      <SvgIcon />
    </S.Icon>
  ) : null
}

export default Icon
