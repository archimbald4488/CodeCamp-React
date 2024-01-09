import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ text = "Button", variant, color, size, state, className, divClassName }) => {
  return (
    <button className={`button ${state} ${size} ${variant} ${color} ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["fill", "soft", "outline"]),
  color: PropTypes.oneOf(["warning", "danger", "info", "success", "secondary", "primary"]),
  size: PropTypes.oneOf(["l", "m", "s"]),
  state: PropTypes.oneOf(["hovered", "disabled", "enabled"]),
};
