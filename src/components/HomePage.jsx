import { Col, Container, FormControl, Row, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const HomePage = (props) => {
  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    navigate(`/weather-page/${props.cityName}`)
  }
  return (
    <Container>
      <Row>
        <Col xs={12} sm={10} md={8} xl={6}>
          <Form onSubmit={(e) => handleFormSubmit(e)}>
            <FormControl
              required
              type='text'
              placeholder='Inserisci il nome di una città...'
              value={props.cityName}
              onChange={(e) => props.setCityName(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
