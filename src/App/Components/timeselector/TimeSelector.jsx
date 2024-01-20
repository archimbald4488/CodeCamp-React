//TimeSelector based on this in React: https://www.devwares.com/docs/contrast/javascript/sections/timepicker/ 
// How to get input with button click: https://simplefrontend.com/how-to-get-input-values-in-react/
import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { Textbox } from "../textbox/Textbox";
import { Modal } from "react-bootstrap";
import "./style.css";
// I decided to change the implementation because I haven't manage to make X close button work
// Also note, our own Button isn't working at least yet so I used the ones given from React Bootstrap library
// Currently this just prints out the given time but when included to todos, it should show the time in UI
export const TimeSelector = ({ handleClose, show, onDone }) => {
    const [time, setTime] = useState("");

    const handleClick = (time) => {
        console.log(time);
        onDone(time);
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Choose Time</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container-s" color="--gray-100" id="timeSelector">
                    <Textbox className="h2" message="Choose time"/>
                    <input type="time" className="form-control" onChange={(e) => setTime(e.target.value)}/>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => handleClick(time)}>
                    Done
                </Button>
            </Modal.Footer>
        </Modal>
    );
}