//TimeSelector based on this in React: https://www.devwares.com/docs/contrast/javascript/sections/timepicker/ 
import React from "react";
import CloseButton from 'react-bootstrap/CloseButton'
//import Button from 'react-bootstrap/Button'
import {Button}  from '../button/index.js'
import "./style.css";

export const TimeSelector = () => {
    return <>
        <div className="container-fluid" color="#FAFAFA">
            <h3>Choose time</h3>
            <CloseButton></CloseButton>
            <div className="cs-form">
                <input type="time" className="form-control" />
            </div>
            <Button state="enabled" variant="fill" color="primary"> Done </Button>
        </div>
    </>
}