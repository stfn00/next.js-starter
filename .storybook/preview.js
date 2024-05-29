import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { GlobalStyles } from '@/theme'

import ThemeProvider from '@/contexts/Theme.context'
import { SectionThemeContext } from '@/contexts/SectionTheme.context'

const withSectionTheme = (Story, { globals }) => {
  return (
    <ThemeProvider>
      <SectionThemeContext.Provider value={globals.colorScheme}>
        <Story />
      </SectionThemeContext.Provider>
    </ThemeProvider>
  )
}

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
    withSectionTheme,
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            height: '896px',
            width: '414px',
          },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet',
          styles: {
            height: '1112px',
            width: '834px',
          },
          type: 'tablet',
        },
      },
    },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
  },
  globalTypes: {
    colorScheme: {
      description: 'Component Color Scheme',
      defaultValue: 'light',
      toolbar: {
        title: 'Color Scheme',
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'grey', title: 'Grey' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
}

export default preview
