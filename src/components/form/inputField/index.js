import React from "react";
import "./input-field.css";

const InputField = (props) => {
  const { label, value, onChange, type, placeholder, name, required, note } =
    props;
  return (
    <div className="input_field_wrapper">
      <label htmlFor={name} className="label">
        {label}
        {required && "*"}
      </label>
      <input
        className="input_field"
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {note && <p className="input_field_note">{note}</p>}
    </div>
  );
};

export default InputField;
