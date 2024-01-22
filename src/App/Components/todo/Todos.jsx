import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import { Textbox } from "../textbox/Textbox.jsx";
import { Modal } from "react-bootstrap";
import { TimeSelector } from "../timeselector/TimeSelector";
import { CheckBox } from "../checkbox/CheckBox.jsx"
import "./style.css";
import { getTodosBasedOnWeather } from "../../utils/mockdata.js";
import "bootstrap/dist/css/bootstrap.min.css";

export const Todos = (props) => {

  let todos = getTodosBasedOnWeather(props.weatherType, props.temperature);

  const [showModal, setShowModal] = useState(false);

  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [taskTimes, setTaskTimes] = useState(new Array(todos.length).fill(null));

  const generateTodosList = () => {
    let listItems = [];
    for (let i=0; i < todos.length; i++) {
      listItems.push(
        <div key={i} className="task-item mb-2 p-2">
          <div className="d-flex align-items-center">
              <div>
                <CheckBox text={todos[i]} />
              </div>
              <div className="d-flex flex-column ms-3">
                <div className="mb-1">
                  {taskTimes[i] && <span className="ms-2" style={{ fontStyle: 'italic' }}>{`Reminder at: ${taskTimes[i]}`}</span>}
                  <Button className="ms-2" variant="outline-primary" onClick={() => handleOpenTimeSelector(i)}>
                    Set Time
                  </Button>
                </div>
              </div>
              {showTimeSelector && selectedTaskIndex === i && (
                    <TimeSelector
                      handleClose={() => setShowTimeSelector(false)}
                      show={showTimeSelector}
                      onDone={handleDoneTimeSelector}
                    />
                )}
            </div>
        </div>
      )
    }

    return listItems;
  }

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpenTimeSelector = (taskIndex) => {
    console.log("Task number " + taskIndex)
    setSelectedTaskIndex(taskIndex);
    setShowTimeSelector(true);
  };

  const handleDoneTimeSelector = (time) => {
    const updatedTaskTimes = [...taskTimes];
    updatedTaskTimes[selectedTaskIndex] = time;
    setTaskTimes(updatedTaskTimes);
    setShowTimeSelector(false);
  };

  return (
    <>
    <Textbox className="font-weight-bold" message="Here's what you should do about today's weather:"/>
    <Button id="done" className="btn btn-light btn-lg" onClick={handleButtonClick}>Todo's</Button>
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Your To-do's for today!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {generateTodosList()}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

  </>
  );
};