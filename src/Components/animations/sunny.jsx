import "./styles.css";

export const Sunny= (props) => {
    return (
        <img className="sunny" src={props.weatherImg} alt={props.weatherType}></img>
    )
};