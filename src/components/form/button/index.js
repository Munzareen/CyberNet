import React from "react";
import "./button.css";

const Button = (props) => {
  const { value, onClick, ref } = props;
  return (
    <button ref={ref} className="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
