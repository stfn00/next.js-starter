// import SectionBuilder from '@/components/organisms/SectionBuilder/SectionBuilder.component'

import { Container, SpacerBase } from '@/components/atoms/GridSystem'

// const sections = [
//   {
//     type: 'ComponentName',
//     sectionID: crypto.randomUUID(),
//     colorScheme: 'dark',
//   },
// ]

const Home = () => {
  return (
    <>
      <SpacerBase xs={4} />
      <Container>
        Homepage
      </Container>
      <SpacerBase xs={4} />
      {/* <SectionBuilder data={sections} /> */}
    </>
  )
}

export default Home
