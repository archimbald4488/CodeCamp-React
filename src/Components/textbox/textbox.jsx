import React from "react";
import "./style.css";

export const Textbox = ({message, className}) => {

    let print;

    if (message === "cloudy") {
        print = "it's cloudy today!"
    } else if (message === "sunny") {
        print = "Wear a hat! It's sunny."
    } else if (message === "raining") {
        print = "Get an umbrella! It's raining."
    } else {
        print = message;
    }

    return (
        <>
        <p class={className}>{print}</p>
        </>
    );
};