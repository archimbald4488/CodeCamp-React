import "./styles.css";
import { Snowing } from "./snowing";
import { Raining } from "./raining";
import { Windy } from "./windy";
import { Sunny } from "./sunny";
import { Cloudy } from "./cloudy";

export const Animation = function (props) {
    let animation; 
    if (props.weatherClassName === "snowing" || props.weatherClassName === "cold" || props.weatherClassName === "freezing") {
        animation =  <Snowing weatherImg={props.weatherImg}></Snowing>;
    } else if (props.weatherClassName === "raining") {
        animation = <Raining weatherImg={props.weatherImg}></Raining>;
    } else if (props.weatherClassName === "windy") {
        animation = <Windy weatherImg={props.weatherImg}></Windy>
    } else if(props.weatherClassName === "sunny") {
        animation = <Sunny weatherImg={props.weatherImg}></Sunny>
    } else if (props.weatherClassName === "cloudy") {
        animation = <Cloudy weatherImg={props.weatherImg}></Cloudy>
    }

    return(
        <div>
            {animation}
        </div>
    )
}