import { rem } from './helpers'

const configs = []

const GRID_CUSTOM_CONF_KEY = 'gridCustomConf'
export const GRID_BASE_CONF = {
  columns: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    xxl: 12,
  },
  gutterWidth: {
    xs: 16,
    sm: 16,
    md: 24,
    lg: 24,
    xl: 24,
    xxl: 24,
  },
  paddingWidth: {
    xs: 16,
    sm: 16,
    md: 24,
    lg: 24,
    xl: 24,
    xxl: 24,
  },
  container: {
    xs: '100%',
    sm: rem(540),
    md: rem(720),
    lg: rem(960),
    xl: rem(1140),
    xxl: rem(1280),
  }
}

const hasCustomConf = ({ theme }) => JSON.stringify((theme && theme[GRID_CUSTOM_CONF_KEY]) || {})

/**
 * Resolves the configuration for the given props.
 *
 * @param {Object} props - The props object.
 * @return {Object} The resolved configuration object.
 */
const resolveConfig = ({ theme }) => {
  const themeConf = (theme && theme[GRID_CUSTOM_CONF_KEY]) || {}

  const conf = {
    ...GRID_BASE_CONF,
    ...themeConf,
  }

  return conf
}

/**
 * Generates a grid configuration based on the provided props.
 *
 * @param {Object} props - The props object to generate the configuration from.
 * @returns {Object} The generated grid configuration.
 */
export default function gridConfig(props = {}) {
  const customConf = hasCustomConf(props)

  if (configs[0] === customConf) {
    return configs[1]
  }

  const conf = resolveConfig(props)

  configs[0] = customConf
  configs[1] = conf

  return conf
}
