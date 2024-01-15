import Form from 'react-bootstrap/Form';
import React from "react";
import "./style.css";

export const WeatherCriteria = (props) => {
    return (
        <Form.Select id="weatherCriteria" onChange={(e) => props.getWeatherCriteria(e.target.value)}>
            <option>Choose weather criteria</option>
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Raining">Raining</option>
            <option value="Windy">Windy</option>
            <option value="Snowing">Snowing</option>
            <option value="Cold">Cold (-1 to -30 °C)</option>
            <option value="Freezing">Freezing (lower than -30 °C)</option>
        </Form.Select>
    )



}