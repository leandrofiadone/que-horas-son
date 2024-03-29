import React, {useState, useEffect} from "react"
import ReactCountryFlag from "react-country-flag"
import anime from "animejs/lib/anime.es.js"
import "./App.css"

const clockSource = {
  beginDrag(props) {
    return {id: props.id}
  }
}

function Clock(props) {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      timeZone: props.timeZone,
      hourCycle: "h23",
      hour: "2-digit",
      minute: "2-digit"
    })
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: props.timeZone,
          hourCycle: "h23",
          hour: "2-digit",
          minute: "2-digit"
        })
      )
    }, 1000)
    return () => clearInterval(intervalId)
  }, [props.timeZone])

  const countryCode = props.countryCode.toLowerCase()
  return (
    <p className="clock">
      {props.label} <ReactCountryFlag countryCode={countryCode} svg /> {time}{" "}
    </p>
  )
}

function App() {
  useEffect(() => {
    anime({
      targets: ".clock",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutExpo",
      delay: anime.stagger(18)
    })
  }, [])

  return (
    <div className="animacion">
      <Clock label="España" timeZone="Europe/Madrid" countryCode="ES" />
      <Clock
        label="Guinea Ecuatorial"
        timeZone="Africa/Malabo"
        countryCode="GQ"
      />

      <Clock label="Uruguay" timeZone="America/Montevideo" countryCode="UY" />
      <Clock
        label="Argentina"
        timeZone="America/Argentina/Buenos_Aires"
        countryCode="AR"
      />
      <Clock label="Chile" timeZone="America/Santiago" countryCode="CL" />
      <Clock label="Paraguay" timeZone="America/Asuncion" countryCode="PY" />
      <Clock label="Bolivia" timeZone="America/La_Paz" countryCode="BO" />
      <Clock label="Venezuela" timeZone="America/Caracas" countryCode="VE" />
      <Clock
        label="República Dominicana"
        timeZone="America/Santo_Domingo"
        countryCode="DO"
      />
      <Clock label="Cuba" timeZone="America/Havana" countryCode="CU" />
      <Clock label="Panamá" timeZone="America/Panama" countryCode="PA" />
      <Clock label="Peru" timeZone="America/Lima" countryCode="PE" />
      <Clock label="Colombia" timeZone="America/Bogota" countryCode="CO" />

      <Clock label="Ecuador" timeZone="America/Guayaquil" countryCode="EC" />

      <Clock
        label="México (Hora del Pacífico)"
        timeZone="America/Tijuana"
        countryCode="MX"
      />
      <Clock
        label="México (Hora del Noroeste)"
        timeZone="America/Hermosillo"
        countryCode="MX"
      />
      <Clock
        label="México (Hora del Centro)"
        timeZone="America/Mexico_City"
        countryCode="MX"
      />
      <Clock
        label="México (Hora del Sureste)"
        timeZone="America/Cancun"
        countryCode="MX"
      />

      <Clock label="Honduras" timeZone="America/Tegucigalpa" countryCode="HN" />
      <Clock label="Guatemala" timeZone="America/Guatemala" countryCode="GT" />
      <Clock label="Nicaragua" timeZone="America/Managua" countryCode="NI" />
      <Clock
        label="Costa Rica"
        timeZone="America/Costa_Rica"
        countryCode="CR"
      />
    </div>
  )
}

export default App
