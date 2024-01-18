'use client'

import { SectionThemeContext } from '@/contexts/SectionTheme'

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

export default SectionBuilder
