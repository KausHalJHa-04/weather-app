import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLikes: 30.49,
        humidity: 31,
        temp: 31.61,
        tempMax: 31.61,
        tempMin: 31.61,
        weather: "clear sky",
    });
    const [error, setError] = useState(false); // Add error state here

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
        setError(false); // Reset error state when valid data is fetched
    };

    let handleError = () => {
        setError(true); // Set error state when the place does not exist
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>WeatherApp</h1>
            <SearchBox updateInfo={updateInfo} handleError={handleError} />
            {!error && <InfoBox info={weatherInfo} />} {/* Conditionally render InfoBox */}
        </div>
    );
};

export default WeatherApp;

