import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as S from './styles'

const Icon = ({ name, ariaLabel, ...props }) => {
  const label = ariaLabel ? ariaLabel : name.replaceAll('-', ' ')

  return (
    <S.Icon {...props} aria-label={label}>
      <FontAwesomeIcon icon={name} />
    </S.Icon>
  )
}

export default Icon
