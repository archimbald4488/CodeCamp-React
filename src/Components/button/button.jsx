/* This component was created with Figma, so it has a lot of css styles applied to it... */

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ text = "Button", variant, color, size, state, className, divClassName, onClick }) => {
  return (
    <button className={`button ${state} ${size} ${variant} ${color} ${className}`} onClick={onClick}>
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
  onClick: PropTypes.func
};
