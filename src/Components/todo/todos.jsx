import React from "react";
import { useState } from "react";
import { Button } from "../button";
import "./style.css";
import { Textbox } from "../textbox";
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
        <Modal.Title>Expanded List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Content here */}
        <p>Task 1</p>
        <p>Task 2</p>
        <p>Task 3</p>
      </Modal.Body>
    </Modal>
  </>
  );
};