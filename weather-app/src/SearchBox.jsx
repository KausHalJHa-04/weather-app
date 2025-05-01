import { useState } from "react";
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

const SearchBox = ({ updateInfo, handleError }) => {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e8d1224bc9a2ab023e9b4debcaa2de83";

    let getWeatherinfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLikes: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            console.error("Error fetching weather data:", err);
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let newInfo = await getWeatherinfo();
            updateInfo(newInfo);
            setCity("");
            setError(false);
        } catch {
            setError(true);
            handleError(); // Notify parent component about the error
        }
    };

    return (
        <div className="searchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" color="success" type="submit">
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No Such Place Exists!</p>}
            </form>
        </div>
    );
};

export default SearchBox;