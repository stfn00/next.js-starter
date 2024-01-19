import ThemeProvider from '@/contexts/Theme.context'

import Header from '@/components/layouts/Header/Header.component'
import Footer from '@/components/layouts/Footer/Footer.component'

import SectionBuilder from '@/components/organisms/SectionBuilder/SectionBuilder.component'

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
