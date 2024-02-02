import { memo } from 'react'
import PropTypes from 'prop-types'

import { SectionThemeContext } from '@/contexts/SectionTheme.context'

import * as Components from '@/components/organisms'

const componentsDispatcher = {
  // CMS: Organism
  // Add your component mappings here
}

const SectionBuilder = memo(({ data = [] }) =>
  data.map((props, index) => {
    const Component = Components[componentsDispatcher[props.type]]
    const key = `section-${props.type}-${index + 1}`

    return Component ? (
      <SectionThemeContext.Provider
        key={key}
        value={props.colorScheme}
      >
        <Component {...props} />
      </SectionThemeContext.Provider>
    ) : (
      <div key={key}>Component not found for type: {props.type}</div>
    )
  })
)

SectionBuilder.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      sectionID: PropTypes.string,
      colorScheme: PropTypes.string,
      // Add additional prop types for each component's props if needed
    })
  ),
}

export default SectionBuilder
