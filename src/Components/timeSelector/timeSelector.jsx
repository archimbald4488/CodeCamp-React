//TimeSelector based on this in React: https://www.devwares.com/docs/contrast/javascript/sections/timepicker/ 
// How to get input with button click: https://simplefrontend.com/how-to-get-input-values-in-react/
import React from "react";
//import CloseButton from 'react-bootstrap/CloseButton'
import Button from 'react-bootstrap/Button';
import { Textbox } from "../textbox";
import { useState } from 'react';
//import {Button}  from '../button/index.js'
import "./style.css";
// I decided to change the implementation because I haven't manage to make X close button work
// Also note, our own Button isn't working at least yet so I used the ones given from React Bootstrap library
// Currently this just prints out the given time but when included to todos, it should show the time in UI
const handleClick = (time) => {
    console.log(time)
}
const handleClose = () => {
    console.log("Close!")
}
export const TimeSelector = () => {
    //Setting variable for the time input, default null; 
    let [time, setTime] = useState(null);
    return <>
        <div className="container-s" color="#FAFAFA" id="timeSelector">
            <Textbox className="h2" message="Choose time"/>
            <input type="time" className="form-control" onChange={(e) => setTime(e.target.value)}/>
            <br />
            <Button state="enabled" variant="secondary" text="Cancel" onClick={handleClose}>Cancel</Button>{' '}
            <Button state="enabled" variant="primary" text="Done" onClick={() => handleClick(time)}> Done </Button>{' '}
            <br />
        </div>
    </>
}