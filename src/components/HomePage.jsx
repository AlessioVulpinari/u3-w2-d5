import { Col, Container, FormControl, Row, Form, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Carousel from "react-bootstrap/Carousel"
const prague = { lat: 50.08, lon: 14.42 }
const atene = { lat: 37.98, lon: 23.72 }
const tokyo = { lat: 35.68, lon: 135.75 }

const HomePage = (props) => {
  const [pragueWeather, setPragueWeather] = useState(null)
  const [ateneWeather, setAteneWeather] = useState(null)
  const [tokyoWeather, setTokyoWeather] = useState(null)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }
  const navigate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    navigate(`/weather-page/${props.cityName}`)
  }

  const fetchPragueWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${prague.lat}&lon=${prague.lon}&appid=47682873ae7cd15430297705dd2c8022`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          if (response.status === 400) {
            throw new Error("400: Bad Request")
          }
          if (response.status === 401) {
            throw new Error("401: Unauthorized")
          }
          if (response.status === 402) {
            throw new Error("402: Payment Required")
          }
          if (response.status === 403) {
            throw new Error("403: Forbidden")
          }
          if (response.status === 404) {
            throw new Error("404: Not Found")
          }
          if (response.status === 405) {
            throw new Error("405: Method Not Allowed")
          }
          if (response.status === 406) {
            throw new Error("406: Not Acceptable")
          }
          if (response.status === 407) {
            throw new Error("407: Proxy Authentication Required")
          }
          if (response.status === 408) {
            throw new Error("408: Request Timeout")
          }
          if (response.status === 500) {
            throw new Error("500: Server Error")
          }

          throw new Error("Generic Fetch Error")
        }
      })
      .then((data) => {
        if (!data) {
          // Se la ricerca non pruduce nessun risultiamo settiamo lo stato isError = true
          // e lanciamo un errore per indicare che non è stato trovato il tempo climato della la città in questione
          setIsError(true)
          throw new Error("No weather info finded")
        } else {
          setPragueWeather(data)
        }
      })
      .catch((err) => {
        // In caso di errore settiamo lo stato isError = true
        // ed utilizziamo il messaggio di errore ricevuto settandolo allo stato errorMsg
        setErrorMsg(err.name + " : " + err.message)
        setIsError(true)
      })
  }

  const fetchAteneWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${atene.lat}&lon=${atene.lon}&appid=47682873ae7cd15430297705dd2c8022`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          if (response.status === 400) {
            throw new Error("400: Bad Request")
          }
          if (response.status === 401) {
            throw new Error("401: Unauthorized")
          }
          if (response.status === 402) {
            throw new Error("402: Payment Required")
          }
          if (response.status === 403) {
            throw new Error("403: Forbidden")
          }
          if (response.status === 404) {
            throw new Error("404: Not Found")
          }
          if (response.status === 405) {
            throw new Error("405: Method Not Allowed")
          }
          if (response.status === 406) {
            throw new Error("406: Not Acceptable")
          }
          if (response.status === 407) {
            throw new Error("407: Proxy Authentication Required")
          }
          if (response.status === 408) {
            throw new Error("408: Request Timeout")
          }
          if (response.status === 500) {
            throw new Error("500: Server Error")
          }

          throw new Error("Generic Fetch Error")
        }
      })
      .then((data) => {
        if (!data) {
          // Se la ricerca non pruduce nessun risultiamo settiamo lo stato isError = true
          // e lanciamo un errore per indicare che non è stato trovato il tempo climato della la città in questione
          setIsError(true)
          throw new Error("No weather info finded")
        } else {
          setAteneWeather(data)
        }
      })
      .catch((err) => {
        // In caso di errore settiamo lo stato isError = true
        // ed utilizziamo il messaggio di errore ricevuto settandolo allo stato errorMsg
        setErrorMsg(err.name + " : " + err.message)
        setIsError(true)
      })
  }

  const fetchTokyoWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${tokyo.lat}&lon=${tokyo.lon}&appid=47682873ae7cd15430297705dd2c8022`
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          if (response.status === 400) {
            throw new Error("400: Bad Request")
          }
          if (response.status === 401) {
            throw new Error("401: Unauthorized")
          }
          if (response.status === 402) {
            throw new Error("402: Payment Required")
          }
          if (response.status === 403) {
            throw new Error("403: Forbidden")
          }
          if (response.status === 404) {
            throw new Error("404: Not Found")
          }
          if (response.status === 405) {
            throw new Error("405: Method Not Allowed")
          }
          if (response.status === 406) {
            throw new Error("406: Not Acceptable")
          }
          if (response.status === 407) {
            throw new Error("407: Proxy Authentication Required")
          }
          if (response.status === 408) {
            throw new Error("408: Request Timeout")
          }
          if (response.status === 500) {
            throw new Error("500: Server Error")
          }

          throw new Error("Generic Fetch Error")
        }
      })
      .then((data) => {
        if (!data) {
          // Se la ricerca non pruduce nessun risultiamo settiamo lo stato isError = true
          // e lanciamo un errore per indicare che non è stato trovato il tempo climato della la città in questione
          setIsError(true)
          throw new Error("No weather info finded")
        } else {
          setTokyoWeather(data)
        }
      })
      .catch((err) => {
        // In caso di errore settiamo lo stato isError = true
        // ed utilizziamo il messaggio di errore ricevuto settandolo allo stato errorMsg
        setErrorMsg(err.name + " : " + err.message)
        setIsError(true)
      })
  }

  // Funzione per istanziare gli Alert di errore
  const createAlert = (errorMsg) => {
    return (
      <Alert variant='danger'>
        <Alert.Heading>WARNING!</Alert.Heading>
        <p>{errorMsg}</p>
      </Alert>
    )
  }

  const kelvinToCelsius = (kelvin) => {
    let celsius = parseFloat(kelvin) - 273.15
    celsius = celsius.toFixed()
    return celsius
  }

  useEffect(() => {
    fetchPragueWeather()
    fetchAteneWeather()
    fetchTokyoWeather()
  }, [])
  return (
    <Container>
      <Row className='justify-content-center text-center'>
        <Col xs={12} sm={10} md={8} xl={6}>
          <h1>Epiweather</h1>
        </Col>
      </Row>
      <Row className='justify-content-center my-3'>
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
      <Row className='my-3 justify-content-center'>
        <Col xs={12} sm={10} md={8} xl={6}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            {isError ? createAlert(errorMsg) : console.log("Nessun errore")}
            {pragueWeather && !isError && (
              <Carousel.Item>
                <img
                  className='img-fluid'
                  src='https://images.unsplash.com/photo-1571778200037-250828fe3eee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='prague'
                  style={{ opacity: 0.6 }}
                ></img>
                <Carousel.Caption className='shadow'>
                  <h3>Prague: {pragueWeather.weather[0].description}</h3>
                  <p>{kelvinToCelsius(pragueWeather.main.temp)} °C</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
            {isError ? createAlert(errorMsg) : console.log("Nessun errore")}
            {ateneWeather && !isError && (
              <Carousel.Item>
                <img
                  src='https://images.unsplash.com/photo-1630933868840-1e9299a5b8dd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='atene'
                  className='img-fluid'
                  style={{ opacity: 0.6 }}
                ></img>
                <Carousel.Caption>
                  <h3>Atene: {ateneWeather.weather[0].description}</h3>
                  <p>{kelvinToCelsius(ateneWeather.main.temp)} °C</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
            {isError ? createAlert(errorMsg) : console.log("Nessun errore")}
            {tokyoWeather && !isError && (
              <Carousel.Item>
                <img
                  src='https://images.unsplash.com/photo-1536768139911-e290a59011e4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='tokyo'
                  className='img-fluid'
                  style={{ opacity: 0.8 }}
                ></img>
                <Carousel.Caption className='shadow'>
                  <h3>Tokyo: {tokyoWeather.weather[0].description}</h3>
                  <p>{kelvinToCelsius(tokyoWeather.main.temp)} °C</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
