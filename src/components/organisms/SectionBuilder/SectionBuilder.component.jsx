'use client'

import PropTypes from 'prop-types'

import { SectionThemeContext } from '@/contexts/SectionTheme.context'

import * as Components from '@/components/organisms'

const componentsDispatcher = {
  // CMS: Organism
}

const SectionBuilder = ({ data }) =>
  data &&
  data.length > 0 &&
  data.map((props, index) => {
    const Component = Components[componentsDispatcher[props.type]]
    const key = `section-${props.type}-${index + 1}`

    return Component ? (
      <SectionThemeContext.Provider key={key} value={props.colorScheme}>
        <Component {...props} />
      </SectionThemeContext.Provider>
    ) : null
  })

SectionBuilder.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    sectionID: PropTypes.string,
    colorScheme: PropTypes.string,
    // Add additional prop types for each component's props if needed
  })).isRequired,
}

export default SectionBuilder
