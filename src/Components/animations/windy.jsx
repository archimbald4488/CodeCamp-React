import "./styles.css";

export const Windy = (props) => {
    return (
        <>
            <img className="windy-left" src={props.weatherImg} alt={props.weatherType}></img>
            <img className="windy-right" src={props.weatherImg} alt={props.weatherType}></img>  
            <img className="windy-left" src={props.weatherImg} alt={props.weatherType}></img>  
            <img className="windy-right" src={props.weatherImg} alt={props.weatherType}></img>  
            <img className="windy-left" src={props.weatherImg} alt={props.weatherType}></img>            
        </>
    )
};