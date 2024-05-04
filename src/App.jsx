import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import HomePage from "./components/HomePage"
import WeatherPage from "./components/WeatherPage"

function App() {
  const [cityName, setCityName] = useState("")

  const kelvinToCelsius = (kelvin) => {
    let celsius = parseFloat(kelvin) - 273.15
    celsius = celsius.toFixed()
    return celsius
  }
  return (
    <div className='App text-white'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<HomePage cityName={cityName} setCityName={setCityName} kelvinToCelsius={kelvinToCelsius} />}
          />
          <Route
            path='/weather-page/:cityName'
            element={<WeatherPage cityName={cityName} setCityName={setCityName} kelvinToCelsius={kelvinToCelsius} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
