import Form from 'react-bootstrap/Form';
import React from "react";
import "./style.css";

export const WeatherCriteria = (props) => {
    return (
        <Form.Select id="weatherCriteria" onChange={(e) => props.getWeatherCriteria(e.target.value)}>
            <option>Choose weather criteria</option>
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Rainy">Rainy</option>
            <option value="Windy">Windy</option>
            <option value="Cold">Cold</option>
            <option value="Freezing">Freezing</option>
        </Form.Select>
    )



}