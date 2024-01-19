import React from "react";
import "./style.css";


/* This component is used as a generic textbox wherever text might be needed, but also has an if-tree for weathertype */
export const Textbox = ({message, className}) => {

    let print;

    if (message === "cloudy") {
        print = "It's cloudy today!"
    } else if (message === "sunny") {
        print = "Wear a hat! It's sunny."
    } else if (message === "raining") {
        print = "Get an umbrella! It's raining."
    } else if (message === "windy"){
        print = "Be careful! It's windy today!"
    } else if (message === "cold") {
        print = "Wear warm clothes! It's cold today!"
    } else if (message === "freezing") {
        print = "Watch out! It's freezing!"
    } else if (message === "snowing") {
        print = "Be careful on the road! It's snowing today!"
    } else {
        print = message;
    }

    return (
        <>
        <p className={className}>{print}</p>
        </>
    );
};