import React from "react";
import "./style.css";

export const Textbox = (props) => {
    const {weather} = props;
    let message;

    if (weather === "cloudy") {
        message = "it's cloudy today!"
    } else if (weather === "sunny") {
        message = "Wear a hat! It's sunny."
    } else if (weather === "raining") {
        message = "Get an umbrella! It's raining."
    } else {
        message = "No weather detected."
    }

    return (
        <>
        <p>{message}</p>
        </>
    );
};