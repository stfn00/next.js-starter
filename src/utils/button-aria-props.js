const getAriaProps = ({
  type,
  label,
  href,
  target,
  ariaLabel,
  rel,
  disabled,
  tabIndex
}) => {
  const normalizedRel = (rel || '') + (target === '_blank' ? ' noopener noreferrer' : '')

  return {
    'aria-label': ariaLabel || label,
    ...(normalizedRel && { rel: normalizedRel }),
    ...(disabled
      ? { 'aria-disabled': true, tabIndex: '-1' }
      : { tabIndex: tabIndex || '0' }),
    ...(!href && { type }),
  }
}

export default getAriaProps
