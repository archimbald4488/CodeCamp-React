//TimeSelector based on this in React: https://www.devwares.com/docs/contrast/javascript/sections/timepicker/ 
import React from "react";
//import CloseButton from 'react-bootstrap/CloseButton'
import Button from 'react-bootstrap/Button'
//import {Button}  from '../button/index.js'
import "./style.css";
// I decided to change the implementation because I haven't manage to make X close button work
// Also note, our own Button isn't working at least yet so I used the ones given from React Bootstrap library

export const TimeSelector = () => {
    return <>
        <div className="container-s" color="#FAFAFA" id="timeSelector">
            <h3>Choose time</h3>
            <input type="time" className="form-control" />
            <br />
            <Button state="enabled" variant="secondary">Cancel</Button>{' '}
            <Button state="enabled" variant="primary"> Done </Button>{' '}
            <br />
        </div>
    </>
}