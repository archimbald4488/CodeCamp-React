import "./styles.css";

export const Snowing = (props) => {
    return (
        <>
            <img className="snowing-left" src={props.weatherImg} alt={props.weatherType}></img>
            <img className={"snowing-right"} src={props.weatherImg} alt={props.weatherType}></img>
            <img className="snowing-left" src={props.weatherImg} alt={props.weatherType}></img>
            <img className={"snowing-right"} src={props.weatherImg} alt={props.weatherType}></img>
            
        </>
    )
};