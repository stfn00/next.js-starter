import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyles } from '@/theme'

export const metadata = {
  title: 'Home',
  description: 'Home page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
