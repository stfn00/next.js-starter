'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export default function StyledComponentsRegistry({ children }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  const hiddenStyledProps = [
    'colorScheme',
    'variant',
    'iconEnd',
    'debug',
    'offsetRight',
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl',
    'typo',
    'weight',
    'align',
    'justify',
    'reverse',
    'isSticky',
    'fullWidth',
    'noGutter',
    'fluid',
  ]

  return (
    <StyleSheetManager
      sheet={typeof window !== 'undefined' ? undefined : styledComponentsStyleSheet.instance}
      shouldForwardProp={(prop) => !hiddenStyledProps.includes(prop)}
    >
      {children}
    </StyleSheetManager>
  )
}
