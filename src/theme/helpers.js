import theme from './config'
import convertToObject from '@/utils/convert-to-object'

export const mediaQuery = {}

export function rem(...values) {
  return values.map(px => `${+px / 16}rem`).join(' ')
}

export function spacing(scalar = 1) {
  return rem(Number(scalar) * 16)
}

export function typo(key) {
  const rules = []

  if (theme.typography[key]) {
    for (const [rule, ruleValue] of Object.entries(theme.typography[key])) {
      if (rule === 'mq') {
        for (const [mq, mqValue] of Object.entries(ruleValue)) {
          rules.push(mediaQuery[mq](mqValue))
        }
      } else {
        let processedValue = ruleValue
        if (rule === 'font-size' || rule === 'line-height') processedValue = rem(ruleValue)
        rules.push(`${rule}: ${processedValue};`)
      }
    }

    return [...rules]
  }

  return ''
}

export const styledVariant = (...args) => (props) => {
  let mapOfStyles

  if (Array.isArray(args[0])) {
    // Are we using a tagged template literal?
    mapOfStyles = convertToObject(...args)(props)
  } else {
    // Regular object usage:
    mapOfStyles = args[args.length - 1]
  }

  const styleKeys = Object.keys(mapOfStyles)

  // If the first argument is a string, styledVariant works differently:
  if (typeof args[0] === 'string') {
    // We use the value of a prop, rather than the key
    const val = props[args[0]]

    if (mapOfStyles[val]) return mapOfStyles[val]
  } else {
    // Otherwise we do things the normal way:
    const matchingKeys = styleKeys.filter(key => props[key])

    // If we have a matching key, return it (or the last if we have multiple):
    if (matchingKeys.length) return mapOfStyles[matchingKeys.pop()]
  }

  // If nothing has matched so far, look for a "default" item in our map:
  if (Object.prototype.hasOwnProperty.call(mapOfStyles, 'default')) {
    return mapOfStyles.default
  }

  // Else just return the last item, whatever it is:
  return mapOfStyles[styleKeys.pop()]
}

const processCss = (css) => {
  if (!css) return ''

  let injectedCss = ''

  if (typeof css === 'string') return css

  if (typeof css?.raw === 'object') return css.raw[0]

  for (const [key, value] of Object.entries(css)) {
    let processedValue = value
    if (key === 'font-size' || key === 'line-height') {processedValue = rem(value)}
    injectedCss += `${key}: ${processedValue}; `
  }

  return injectedCss
}

for (const key in theme.breakpoints) {
  mediaQuery[key] = function (css, until = false) {
    const query = until ? 'max-width' : 'min-width'
    return `
      @media screen and (${query}: ${theme.breakpoints[key]}px) {
        ${processCss(css)}
      }
    `
  }
}
