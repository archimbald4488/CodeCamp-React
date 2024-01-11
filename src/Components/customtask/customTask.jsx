import React from "react";
import Button from 'react-bootstrap/Button'

export const customTask = () => {
    <>
    <div className="container-s" color="#FAFAFA">
        <h2>Add new task</h2>
        <input type="text" placeholder="Write name for new task.."/>
        <h2>Task Description</h2>
        <input type="text" placeholder="Write new task.." />
        <h2>Weather criteria</h2>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Done</Button>
    </div>
    </>
}