import { Container, Row, Col } from '@/components/atoms/GridSystem'

export default {
  title: 'Atoms/Grid System',
  component: () => {
    return (
      <Container debug>
        <Row>
          <Col debug xs={1} sm={1} lg={1} offsetRight={{ xs: 3, sm: 7, lg: 11 }}>&nbsp;</Col>
          <Col debug xs={1} sm={1} lg={2} offsetRight={{ xs: 3, sm: 7, lg: 10 }}>&nbsp;</Col>
          <Col debug xs={1} sm={2} lg={3} offsetRight={{ xs: 3, sm: 6, lg: 9 }}>&nbsp;</Col>
          <Col debug xs={2} sm={3} lg={4} offsetRight={{ xs: 2, sm: 5, lg: 8 }}>&nbsp;</Col>
          <Col debug xs={2} sm={4} lg={5} offsetRight={{ xs: 2, sm: 4, lg: 7 }}>&nbsp;</Col>
          <Col debug xs={2} sm={5} lg={6} offsetRight={{ xs: 2, sm: 3, lg: 6 }}>&nbsp;</Col>
          <Col debug xs={3} sm={5} lg={7} offsetRight={{ xs: 1, sm: 3, lg: 5 }}>&nbsp;</Col>
          <Col debug xs={3} sm={5} lg={8} offsetRight={{ xs: 1, sm: 3, lg: 4 }}>&nbsp;</Col>
          <Col debug xs={3} sm={6} lg={9} offsetRight={{ xs: 1, sm: 2, lg: 3 }}>&nbsp;</Col>
          <Col debug xs={4} sm={7} lg={10} offsetRight={{ sm: 1, lg: 2 }}>&nbsp;</Col>
          <Col debug xs={4} sm={8} lg={11} offsetRight={{ lg: 1 }}>&nbsp;</Col>
          <Col debug xs={4} sm={8} lg={12}>&nbsp;</Col>
        </Row>
      </Container>
    )
  },
}

// Variant - Default
export const Default = {
  args: {}
}
