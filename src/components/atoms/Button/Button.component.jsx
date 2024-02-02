import { forwardRef, memo, useCallback } from 'react'
import PropTypes from 'prop-types'

import Link from 'next/link'

import { useSectionThemeContext } from '@/contexts/SectionTheme.context'

import getAriaProps from '@/utils/button-aria-props'

import Icon from '@/components/atoms/Icon/Icon.component'

import * as S from './Button.styles'

/**
 * Wrapper component for rendering a link
 */
const LinkWrapper = memo(({ target, href, children }) => {
  if (href && ['_self', '_blank', '_parent', '_top'].includes(target)) {
    return (
      <Link href={href} passHref target={target}>
        {children}
      </Link>
    )
  }

  return children
})

/**
 * Button component
 */
const Button = ({
  type = 'button',
  label,
  href,
  target,
  ariaLabel,
  rel,
  disabled,
  tabIndex,
  variant = 'primary',
  iconEnd,
  iconEndSize,
  innerRef,
  scrollTo,
  handleClick = null,
  ...props
}) => {
  // Get the selected color scheme from the context
  const colorScheme = useSectionThemeContext()

  // Generate the ARIA props for the button
  const ariaProps = getAriaProps({
    type,
    label,
    href,
    target,
    ariaLabel,
    rel,
    disabled,
    tabIndex,
  })

  /**
   * Handle scrolling to the specified element
   */
  const handleScrollTo = useCallback(() => {
    const offset = 0
    const element = document.getElementById(scrollTo)

    if (!element) {
      return
    }

    const { top } = element.getBoundingClientRect()
    const y = top + window.scrollY - offset

    window.scrollTo({ top: y, behavior: 'smooth' })

    const focusable = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (focusable.length > 0) {
      focusable[0].focus({ preventScroll: true })
    }

    handleClick?.()
  }, [scrollTo, handleClick])

  return (
    <LinkWrapper href={href} target={target}>
      <S.Button
        {...props}
        {...ariaProps}
        as={href ? 'a' : 'button'}
        $label={label}
        href={href}
        iconEnd={iconEnd}
        variant={variant}
        colorScheme={colorScheme}
        ref={innerRef}
        onClick={scrollTo ? handleScrollTo : handleClick}
      >
        {label && <S.ButtonLabel>{label}</S.ButtonLabel>}
        {iconEnd && (
          <Icon
            name={iconEnd}
            size={iconEndSize ? iconEndSize : 'medium'}
            aria-hidden
          />
        )}
      </S.Button>
    </LinkWrapper>
  )
}

/**
 * Forwarded Button component
 */
export const ButtonForwardingRef = forwardRef((props, ref) => (
  <Button {...props} innerRef={ref} />
))

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  label: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  ariaLabel: PropTypes.string,
  rel: PropTypes.string,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  typo: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  iconEnd: PropTypes.string,
  iconEndSize: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  scrollTo: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Button
