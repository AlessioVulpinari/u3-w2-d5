import { useEffect, useState } from "react"
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"

const WeatherPage = (props) => {
  const params = useParams()

  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [todayWeather, setTodayWeather] = useState(null)

  let cityCordinates = null

  const fetchCordinates = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${params.cityName}&appid=47682873ae7cd15430297705dd2c8022`)
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
          // e lanciamo un errore per indicare che la città in questione non è stata trovata
          setIsError(true)
          throw new Error("No city finded")
        } else {
          const cordinates = { lat: parseFloat(data[0].lat).toFixed(2), lon: parseFloat(data[0].lon).toFixed(2) }
          cityCordinates = cordinates
          fetchTodayWeather()
        }
      })
      .catch((err) => {
        // In caso di errore settiamo lo stato isError = true
        // ed utilizziamo il messaggio di errore ricevuto settandolo allo stato errorMsg
        setErrorMsg(err.name + " : " + err.message)
        setIsError(true)
      })
  }

  const fetchTodayWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${cityCordinates.lat}&lon=${cityCordinates.lon}&appid=47682873ae7cd15430297705dd2c8022`
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
          setTodayWeather(data)
        }
      })
      .catch((err) => {
        // In caso di errore settiamo lo stato isError = true
        // ed utilizziamo il messaggio di errore ricevuto settandolo allo stato errorMsg
        setErrorMsg(err.name + " : " + err.message)
        setIsError(true)
      })
      .finally(() => {
        // In ogni caso (sia che abbiamo ricevuto un errore o meno) settiamo
        // isLoading che di default è true a false per disattivare lo spinner
        setIsLoading(false)
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
    celsius = celsius.toFixed(2)
    return celsius
  }

  useEffect(() => {
    fetchCordinates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isLoading && !isError ? (
        // in questo caso istanziamo lo spinner per il caricamento
        <Spinner animation='border' role='status' variant='light' className='mx-auto'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      ) : (
        console.log("Ciao")
      )}
      {isError ? createAlert(errorMsg) : console.log("Nessun errore")}
      {todayWeather && !isError ? (
        <Container>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col xs={12}>{todayWeather.weather[0].description}</Col>
                  <Col xs={12}>{kelvinToCelsius(todayWeather.main.temp)} °C</Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={12}>Wind:</Col>
                  <Col xs={12}>{todayWeather.wind.speed} m/s</Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col xs={12}>Humidity:</Col>
                  <Col xs={12}>{todayWeather.main.humidity}%</Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container></Container>
        </Container>
      ) : (
        console.log("erroe")
      )}
    </>
  )
}

export default WeatherPage
