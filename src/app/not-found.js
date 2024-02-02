import Link from 'next/link'

import { Container, SpacerBase } from '@/components/atoms/GridSystem'

const NotFound = () => {
  return (
    <Container>
      <SpacerBase xs={4} />
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
      <SpacerBase xs={4} />
    </Container>
  )
}

export default NotFound
