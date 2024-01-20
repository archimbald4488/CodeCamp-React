import "./styles.css";
import rainCloud from './rainCloud.png';

export const Raining= (props) => {
    return (
        <>
        <div>
            <img className="rain-cloud" src={rainCloud} alt={props.weatherType}></img>
        </div>
            <img className="raining-1" src={props.weatherImg} alt={props.weatherType}></img>
            <img className="raining-3" src={props.weatherImg} alt={props.weatherType}></img>
            <img className="raining-2" src={props.weatherImg} alt={props.weatherType}></img>
            <img className="raining-1" src={props.weatherImg} alt={props.weatherType}></img>
            <img className="raining-3" src={props.weatherImg} alt={props.weatherType}></img>
            
        </>
    )
};