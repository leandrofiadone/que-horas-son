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
			<Clock
				label="Argentina"
				timeZone="America/Argentina/Buenos_Aires"
				countryCode="AR"
			/>
			<Clock label="Colombia" timeZone="America/Bogota" countryCode="CO" />
			<Clock label="Ecuador" timeZone="America/Guayaquil" countryCode="EC" />
			<Clock label="España" timeZone="Europe/Madrid" countryCode="ES" />
			<Clock label="Venezuela" timeZone="America/Caracas" countryCode="VE" />
			<Clock label="Chile" timeZone="America/Santiago" countryCode="CL" />
			<Clock label="Uruguay" timeZone="America/Montevideo" countryCode="UY" />
			<Clock
				label="El Salvador"
				timeZone="America/El_Salvador"
				countryCode="SV"
			/>
			<Clock
				label="Guinea Ecuatorial"
				timeZone="Africa/Malabo"
				countryCode="GQ"
			/>
			<Clock label="Honduras" timeZone="America/Tegucigalpa" countryCode="HN" />
			<Clock
				label="Puerto Rico"
				timeZone="America/Puerto_Rico"
				countryCode="PR"
			/>
		</div>
	);
}

export default App;
