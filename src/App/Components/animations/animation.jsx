import "./styles.css";
import { Snowing } from "./snowing";
import { Raining } from "./raining";
import { Windy } from "./windy";
import { Sunny } from "./sunny";
import { Cloudy } from "./cloudy";
import Snow from "./images/snowing.png";
import Rain from "./images/raining.png";
import Wind from "./images/windy.png";
import Sun from "./images/sunny.png";
import Cloud from "./images/cloudy.png";

export const Animation = function (props) {
    let animation; 
    if (props.weatherClassName === "snowing" || props.weatherClassName === "cold" || props.weatherClassName === "freezing") {
        animation =  <Snowing weatherImg={Snow}></Snowing>;
    } else if (props.weatherClassName === "raining") {
        animation = <Raining weatherImg={Rain}></Raining>;
    } else if (props.weatherClassName === "windy") {
        animation = <Windy weatherImg={Wind}></Windy>
    } else if(props.weatherClassName === "sunny") {
        animation = <Sunny weatherImg={Sun}></Sunny>
    } else if (props.weatherClassName === "cloudy") {
        animation = <Cloudy weatherImg={Cloud}></Cloudy>
    }

    return(
        <div>
            {animation}
        </div>
    )
}