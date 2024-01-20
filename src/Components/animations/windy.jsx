import "./styles.css";

export const Windy = (props) => {
    return (
        <>
            <img className="windy-1" src={props.weatherImg} alt={props.weatherType}></img>
            <img className="windy-2" src={props.weatherImg} alt={props.weatherType}></img>  
            <img className="windy-3" src={props.weatherImg} alt={props.weatherType}></img>  
            <img className="windy-3" src={props.weatherImg} alt={props.weatherType}></img>  
            <img className="windy-1" src={props.weatherImg} alt={props.weatherType}></img>
            <img className="windy-3" src={props.weatherImg} alt={props.weatherType}></img>  
            <img className="windy-2" src={props.weatherImg} alt={props.weatherType}></img>      

        </>
    )
};