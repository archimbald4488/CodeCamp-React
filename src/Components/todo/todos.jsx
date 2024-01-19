import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import { Textbox } from "../textbox";
import { Modal } from "react-bootstrap";
import { CustomTask } from "../customtask/index.js";
import { TimeSelector } from "../timeSelector/index.js";
import { CheckBox } from "../checkbox/index.js"
import "./style.css";
import { getTodosBasedOnWeather } from "../../mockdata";
import "bootstrap/dist/css/bootstrap.min.css";

export const Todos = (props) => {

  let todos = getTodosBasedOnWeather(props.weatherType, props.temperature);

  const [showModal, setShowModal] = useState(false);

  const [showCustomTask, setShowCustomTask] = useState(false);
  const [customTasks, setCustomTasks] = useState([]);

  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [taskTimes, setTaskTimes] = useState(new Array(todos.length).fill(null));

  const generateTodosList = () => {
    let listItems = [];
    for (let i=0; i < todos.length; i++) {
      listItems.push(
        <div key={i} className="task-item">
          <div>
            <CheckBox text={todos[i]}/>
          </div>
          <div>
          <Button variant="outline-primary" onClick={ () => handleOpenTimeSelector(i)}>
            Set Time
          </Button>
          {showTimeSelector && (
            <TimeSelector 
              handleClose={() => setShowTimeSelector(false)} 
              show={showTimeSelector} 
              onDone={handleDoneTimeSelector}
            />
          )}
          {taskTimes[i] && <div>{`Time: ${taskTimes[i]}`}</div>}
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

  const handleOpenCustomTask = () => {
    console.log("Opening Custom Task");
    setShowCustomTask(true);
  };
  
  const handleCloseCustomTask = () => {
    console.log("Closing Custom Task");
    setShowCustomTask(false);
  };

  const handleDoneCustomTask = (newTask) => {
  setCustomTasks([...customTasks, newTask]); //can be used to implement the new tasks
  setShowCustomTask(false);
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
    <Textbox className="p" message="Here's what you should do about today's weather:"/>
    <Button id="done" variant={"primary"} onClick={handleButtonClick}>Todo's</Button>
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Todos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {generateTodosList()}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleOpenCustomTask}>
          Add Custom Task
        </Button>
      </Modal.Footer>
    </Modal>

    {/* CustomTask component */}
    {showCustomTask && <CustomTask handleClose={handleCloseCustomTask} show={showCustomTask} onDone={handleDoneCustomTask}/>}
  </>
  );
};