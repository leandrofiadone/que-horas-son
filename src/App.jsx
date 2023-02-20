import "./App.css";

import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

function Clock(props) {
	const [time, setTime] = useState(
		new Date().toLocaleTimeString("en-US", {
			timeZone: props.timeZone,
			hourCycle: "h23",
			hour: "2-digit",
			minute: "2-digit",
		})
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime(
				new Date().toLocaleTimeString("en-US", {
					timeZone: props.timeZone,
					hourCycle: "h23",
					hour: "2-digit",
					minute: "2-digit",
				})
			);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [props.timeZone]);

	const countryCode = props.countryCode.toLowerCase();
	return (
		<p>
			{props.label} <ReactCountryFlag countryCode={countryCode} svg /> {time}{" "}
		</p>
	);
}

function App() {
	return (
		<div className="app">
			<Clock label="Colombia" timeZone="America/Bogota" countryCode="CO" />
			<Clock label="Ecuador" timeZone="America/Guayaquil" countryCode="EC" />
			<Clock label="España" timeZone="Europe/Madrid" countryCode="ES" />
			<Clock label="Venezuela" timeZone="America/Caracas" countryCode="VE" />
			<Clock label="Chile" timeZone="America/Santiago" countryCode="CL" />
			<Clock label="Uruguay" timeZone="America/Montevideo" countryCode="UY" />
			<Clock label="Mexico" timeZone="America/Mexico_City" countryCode="MX" />
			<Clock label="Peru" timeZone="America/Lima" countryCode="PE" />
			<Clock label="Guatemala" timeZone="America/Guatemala" countryCode="GT" />
			<Clock label="Cuba" timeZone="America/Havana" countryCode="CU" />
			<Clock label="Bolivia" timeZone="America/La_Paz" countryCode="BO" />
			<Clock
				label="Dominican Republic"
				timeZone="America/Santo_Domingo"
				countryCode="DO"
			/>
			<Clock label="Paraguay" timeZone="America/Asuncion" countryCode="PY" />
			<Clock label="Nicaragua" timeZone="America/Managua" countryCode="NI" />
			<Clock
				label="Costa Rica"
				timeZone="America/Costa_Rica"
				countryCode="CR"
			/>
			<Clock label="Panama" timeZone="America/Panama" countryCode="PA" />
		</div>
	);
}

export default App;
