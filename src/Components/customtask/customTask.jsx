// Getting input in react: https://simplefrontend.com/how-to-get-input-values-in-react/

import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
//import { Button } from "../button";
import { WeatherCriteria } from "./weatherCriteria";
import { Temperature } from "./Temperature";
import { Textbox } from "../textbox";
import "./style.css";

export const CustomTask = () => {
    // Probably the info provided in custom task form should be saved somewhere!
    //const [customTaskInfo, setCustomTaskInfo] = useState({taskName: "task", taskDescription: "description", weatherCriteria: "weather", temperature: 0})
    const [taskName, setTaskName] = useState(null); 
    const [taskDescription, setTaskDescription] = useState(null); 
    const [weatherCriteria, setWeatherCriteria] = useState(null);
    const [temperature, setTemperature] = useState(0);  

    function getWeatherCriteria(weatherCriteria) {
        setWeatherCriteria(weatherCriteria);
    }
    function getTemperature(temperature) {
        setTemperature(temperature);
    }
    function handleClose() {
        console.log("Closing..")
    }

    function handleClick() {
        // The task has to have name!
        if (!taskName) {
            return
        }
        let customTask = {
            name: taskName, 
            description: taskDescription, 
            weatherCriteria: weatherCriteria, 
            temperature: temperature
        }
        console.log(customTask);
    }
    return (
        <>
    <div className="container-l" id="customTask">
        <Textbox className="h2" message="Add new task"/>
        <input type="text" placeholder="Write name for new task.." onChange={(e) => setTaskName(e.target.value)}/>
        <Textbox className="h2" message="Task description"/>
        <textarea placeholder="Write description for new task.." onChange={(e) =>setTaskDescription( e.target.value)}></textarea>
        <Textbox className="h2" message="Weather criteria"/>
        <WeatherCriteria getWeatherCriteria={getWeatherCriteria}></WeatherCriteria>
        <Textbox className="h2" message="Temperature"/>
        <Temperature getTemperature={getTemperature}></Temperature>
        {/* Bootstrap buttons */}
        <Button id="cancel" variant={"secondary"} onClick={handleClose}>Close</Button>
        <Button id="done" variant={"primary"} onClick={handleClick}>Done</Button>

        {/* Our buttons*/ }
        {/*<Button variant={"fill"} state={"enabled"} color={"red"} size="m" text="Cancel" onClick={handleClose}>Cancel</Button>
        <Button color={"$primary"} text="Done"onClick={handleClick}> Done </Button>*/}
    </div>
    </>
    )
}