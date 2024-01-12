import React from "react";
import "./style.css";


/* This component is used as a generic textbox wherever text might be needed, but also has an if-tree for weathertype */
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