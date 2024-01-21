//Example on how to make range slider functional: https://www.geeksforgeeks.org/react-bootstrap-range/
import Form from 'react-bootstrap/Form';
import React, {useState} from "react";
import "./style.css";

export const Temperature = (props) => {
    const [temperature, setTemperature] = useState(0);
    const handleTemperatureChange = (e) => {
        props.getTemperature(e.target.value)
        setTemperature(e.target.value)
    }
    return (
        <>
            <Form.Range className='slider'
            value={temperature}
            min={-40}
            max={+38}
            step={1}
            id="temperatureSlider"
            onChange={(handleTemperatureChange)}/>
            <p>Selected temperature: {temperature} °C </p>
        </>
    )



}