import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, secondary, icon }) => {
  return (
    <button className={secondary ? "secondary" : "primary"} onClick={onClick}>
      <img src={icon} alt=""/>{text}
    </button>
  );
};

export default Button;
