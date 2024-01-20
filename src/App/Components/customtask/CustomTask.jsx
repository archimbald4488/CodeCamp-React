// Getting input in react: https://simplefrontend.com/how-to-get-input-values-in-react/

import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import { WeatherCriteria } from "./weatherCriteria";
import { Temperature } from "./Temperature";
import { Textbox } from "../textbox/Textbox";
import "./style.css";
import { Modal } from "react-bootstrap";

export const CustomTask = ({ handleClose, show, onDone }) => {

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

    function handleCloseCustomTask() {
        if (handleClose) {
        handleClose();
        }
    }

    function handleClick() {
        // The task has to have a name!
        if (!taskName) {
          return;
        }
        let newTask = {
          name: taskName,
          description: taskDescription,
          weatherCriteria: weatherCriteria,
          temperature: temperature,
        };
        console.log(newTask);

        onDone(newTask);

        handleCloseCustomTask(); // Close the modal after handling the click
      }

    return (
        <>
            <Modal show={show} onHide={handleCloseCustomTask}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-l" id="customTask">
                        <Textbox className="h2" message="Add new task"/>
                        <input type="text" placeholder="Write name for new task.." onChange={(e) => setTaskName(e.target.value)}/>
                        <Textbox className="h2" message="Task description"/>
                        <textarea placeholder="Write description for new task.." onChange={(e) =>setTaskDescription( e.target.value)}></textarea>
                        <Textbox className="h2" message="Weather criteria"/>
                        <WeatherCriteria getWeatherCriteria={getWeatherCriteria}></WeatherCriteria>
                        <Textbox className="h2" message="Temperature"/>
                        <Temperature getTemperature={getTemperature}></Temperature>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"secondary"} onClick={handleCloseCustomTask}>
                        Cancel
                    </Button>
                    <Button variant={"primary"} onClick={handleClick}>
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}