import ThemeProvider from '@/contexts/Theme'

import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

import SectionBuilder from '@/components/organisms/SectionBuilder'

const sections = [
  // {
  //   type: 'ComponentName',
  //   sectionID: crypto.randomUUID(),
  //   colorScheme: 'dark',
  // },
]

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <SectionBuilder data={sections} />
      <Footer />
    </ThemeProvider>
  )
}
