import "./styles.css";

export const Cloudy = (props) => {
    return (
        <>
            <img className="cloudy-left" src={props.weatherImg} alt={props.weatherType}></img>
            <img className="cloudy-right" src={props.weatherImg} alt={props.weatherType}></img>          
        </>
    )
};