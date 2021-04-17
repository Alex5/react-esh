import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, secondary }) => {
  return (
    <button className={secondary ? "secondary" : "primary"} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
