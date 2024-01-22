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
                    <div className="container-lg" id="customTask">
                    <Textbox className="h2 mb-4" message="Task name" />

                    <div className="mb-3">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Write name for new task.."
                        onChange={(e) => setTaskName(e.target.value)}
                        />
                    </div>

                    <Textbox className="h2 mb-4" message="Task description" />

                    <div className="mb-3">
                        <textarea
                        className="form-control"
                        placeholder="Write description for new task.."
                        onChange={(e) => setTaskDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <Textbox className="h2 mb-4" message="Weather criteria" />

                    <div className="mb-3">
                        <WeatherCriteria getWeatherCriteria={getWeatherCriteria} />
                    </div>

                    <Textbox className="h2 mb-4" message="Temperature" />

                    <div className="mb-3">
                        <Temperature getTemperature={getTemperature} />
                    </div>
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