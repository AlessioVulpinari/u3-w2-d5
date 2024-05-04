import { useEffect, useState } from "react"
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
const today = new Date().toDateString()

const WeatherPage = (props) => {
  const params = useParams()
  const navigate = useNavigate()

  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [todayWeather, setTodayWeather] = useState(null)
  const [fiveDayWeather, setFiveDayWeather] = useState(null)
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
          fetchFiveDaysWeather()
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
  }

  const fetchFiveDaysWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${cityCordinates.lat}&lon=${cityCordinates.lon}&appid=47682873ae7cd15430297705dd2c8022`
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
        if (!data.list) {
          // Se la ricerca non pruduce nessun risultiamo settiamo lo stato isError = true
          // e lanciamo un errore per indicare che non è stato trovato il tempo climato della la città in questione
          setIsError(true)
          throw new Error("No weather info finded")
        } else {
          //   getNewDate(today, data.list)

          setFiveDayWeather(data.list)
        }
      })
      .catch((err) => {
        // In caso di errore settiamo lo stato isError = true
        // ed utilizziamo il messaggio di errore ricevuto settandolo allo stato errorMsg
        setErrorMsg(err.name + " : " + err.message)
        setIsError(true)
      })
      .finally(setIsLoading(false))
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

  const handleIconClick = () => {
    navigate("/")
  }

  useEffect(() => {
    fetchCordinates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isLoading && !isError && (
        <Spinner animation='border' role='status' variant='primary' className='mx-auto'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      )}
      {isError ? createAlert(errorMsg) : console.log("Nessun errore")}
      {todayWeather && !isError && (
        <Container>
          <Container className='text-center'>
            <div className='text-start py-2' onClick={() => handleIconClick()}>
              <i className='bi bi-arrow-90deg-left display-5'></i>
            </div>
            <h1 className='fs-1 fw-bold'>{params.cityName}</h1>
            <h2 className='fs-3 fw-bolder'>{today}</h2>
            <Row>
              <Col>
                <img
                  src={`https://openweathermap.org/img/wn/${todayWeather.weather[0].icon}@2x.png`}
                  alt={todayWeather.weather[0].description}
                  className='img-fluid'
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4}>
                <Row>
                  <Col className='fw-bolder' xs={12}>
                    {todayWeather.weather[0].description}
                  </Col>
                  <Col xs={12}>{props.kelvinToCelsius(todayWeather.main.temp)} °C</Col>
                </Row>
              </Col>
              <Col xs={4}>
                <Row>
                  <Col className='fw-bolder' xs={12}>
                    Wind:
                  </Col>
                  <Col xs={12}>{todayWeather.wind.speed} m/s</Col>
                </Row>
              </Col>
              <Col xs={4}>
                <Row>
                  <Col className='fw-bolder' xs={12}>
                    Humidity:
                  </Col>
                  <Col xs={12}>{todayWeather.main.humidity}%</Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container className='my-2'>
            <h2 className='fs-3 fw-bolder py-2'>Next Five Days:</h2>
            <Row>
              {fiveDayWeather &&
                fiveDayWeather.map((obj, i) => (
                  <Col xs={12} sm={6} key={"Key" + i}>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>
                        <img
                          alt={obj.weather[0].description}
                          src={`https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`}
                        ></img>
                      </span>
                      <span>{obj.dt_txt}</span>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <span>Max: {props.kelvinToCelsius(obj.main.temp_max)} °C</span>
                      <span>Min: {props.kelvinToCelsius(obj.main.temp_min)} °C</span>
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        </Container>
      )}
    </>
  )
}

export default WeatherPage
