import ThemeProvider from '@/contexts/Theme.context'

import Header from '@/components/layouts/Header/Header.component'
import Footer from '@/components/layouts/Footer/Footer.component'

const Template = ({ children }) => {
  return (
    <ThemeProvider>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}

export default Template
