import React from "react";
import { useState } from "react";
import { Button } from "../button";
import "./style.css";
import { Textbox } from "../textbox";
import { CheckBox } from "../checkbox";
import { Modal } from "react-bootstrap";
import { getTodosBasedOnWeather} from "../../mockdata";
import "bootstrap/dist/css/bootstrap.min.css";
import { get } from "mongoose";

export const Todos = (props) => {
    /* Determine if todos button is expanded */
    const [showModal, setShowModal] = useState(false);
    let todos = getTodosBasedOnWeather(props.weatherType, props.temperature);
    const handleButtonClick = () => {
      setShowModal(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
    };

    const generateTodosList = () => {
      let listItems = [];
      for (let i=0; i < todos.length; i++) {
        listItems.push(
          <CheckBox 
          id= {i}
          text={todos[i]}>    
          </CheckBox>
        )
      }

      return listItems;
    }

  return (
    <>
    <Textbox className="p" message="Here's what you should do about today's weather:"/>
    <Button
    className="button-instance"
    color="primary"
    divClassName="design-component-instance-node"
    size="m"
    state="enabled"
    text="Tasks"
    variant="fill"
    onClick={handleButtonClick}
    />
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Todos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Content here */}
        {generateTodosList()}
        
      </Modal.Body>
    </Modal>
  </>
  );
};