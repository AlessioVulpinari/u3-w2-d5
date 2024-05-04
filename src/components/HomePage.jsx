import { Col, Container, FormControl, Row, Form, Alert } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Carousel from "react-bootstrap/Carousel"

// Cordinate di alcune città, utilizzate per la creazione del carosello
const prague = { lat: 50.08, lon: 14.42 }
const atene = { lat: 37.98, lon: 23.72 }
const tokyo = { lat: 35.68, lon: 135.75 }

const HomePage = (props) => {
  // -------------------- STATI -------------------------
  // Stato per gestire le fetch del meteo di praga, atene e tokyo
  const [pragueWeather, setPragueWeather] = useState(null)
  const [ateneWeather, setAteneWeather] = useState(null)
  const [tokyoWeather, setTokyoWeather] = useState(null)
  // Stati per la gestione errori
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  // Stato per la gestione degli indici delle immagini del carosello
  const [index, setIndex] = useState(0)
  // Set dello stato degli indici del carosello
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  // Funzioni per il cambio di pagina al submit del form
  const navigate = useNavigate()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    navigate(`/weather-page/${props.cityName}`)
  }

  // Fetch per il meteo di Praga
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
          // Settiamo lo stato con i dati appena ricevuti
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

  // Fetch per il meteo di Atene
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
          // Settiamo lo stato con i dati appena ricevuti
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

  // Fetch per il meteo di Tokyo
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
          // Settiamo lo stato con i dati appena ricevuti
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

  // Richiamiamo le funzioni di fetch solo al montaggio del componente (similmente ad un componentDidMount)
  useEffect(() => {
    fetchPragueWeather()
    fetchAteneWeather()
    fetchTokyoWeather()
  }, [])
  return (
    <>
      <Container className='my-2'>
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
        {isError && createAlert(errorMsg)}
        {pragueWeather && tokyoWeather && ateneWeather && !isError && (
          <Row className='my-3 justify-content-center'>
            <Col xs={12} sm={10} md={8} xl={6}>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {pragueWeather && !isError && (
                  <Carousel.Item>
                    <img
                      className='img-fluid'
                      src='https://images.unsplash.com/photo-1563804026626-f0225ec1817a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='prague'
                      style={{ opacity: 0.6 }}
                    ></img>
                    <Carousel.Caption className='shadow'>
                      <h3>Prague: {pragueWeather.weather[0].description}</h3>
                      <p>{props.kelvinToCelsius(pragueWeather.main.temp)} °C</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )}
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
                      <p>{props.kelvinToCelsius(ateneWeather.main.temp)} °C</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )}
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
                      <p>{props.kelvinToCelsius(tokyoWeather.main.temp)} °C</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )}
              </Carousel>
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}

export default HomePage
