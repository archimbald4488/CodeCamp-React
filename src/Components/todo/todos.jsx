import React from "react";
import { useState } from "react";
import { Button } from "../button";
import "./style.css";
import { Textbox } from "../textbox";
import { CheckBox } from "../checkbox";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Todos = () => {

    /* Determine if todos button is expanded */
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
      setShowModal(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
    };

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
        <CheckBox 
          id="1"
          text="Use sunscream">    
        </CheckBox>
        <CheckBox 
          id="2"
          text="Water plants">    
        </CheckBox>
        <CheckBox 
          id="3"
          text="Drink water">    
        </CheckBox>
        
      </Modal.Body>
    </Modal>
  </>
  );
};