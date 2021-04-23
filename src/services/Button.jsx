import React from "react";
import "./Button.scss";

const Button = ({ text, onClick, secondary, icon, secondarySquare, alt }) => {
  const [className, setClassName] = React.useState("");

  React.useEffect(() => {
    switch (true) {
      case secondarySquare:
        setClassName("secondary square");
        break;
      case secondary:
        setClassName("secondary");
        break;
      default:
        setClassName("primary");
        break;
    }
  }, [secondary, secondarySquare]);

  return (
    <button className={className} onClick={onClick}>
      <img src={icon} alt={alt} />
      {text}
    </button>
  );
};

export default Button;
