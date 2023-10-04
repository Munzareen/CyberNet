import React from "react";
import "./button.css";

const Button = (props) => {
  const { value, onClick } = props;
  return <button className="button" onClick={onClick}>{value}</button>;
};

export default Button;
