import "./styles.css";

export const Snowing = (props) => {
    return (
        <>
            <img className="snowing-1" src={props.weatherImg} alt={props.weatherType}></img>
            <img className={"snowing-2"} src={props.weatherImg} alt={props.weatherType}></img>
            <img className="snowing-1" src={props.weatherImg} alt={props.weatherType}></img>
            <img className={"snowing-3"} src={props.weatherImg} alt={props.weatherType}></img>
            <img className={"snowing-2"} src={props.weatherImg} alt={props.weatherType}></img>       
        </>
    )
};