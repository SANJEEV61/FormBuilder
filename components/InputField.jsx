import React from "react";

const InputField = ({ label, name, type, value, onChange, error }) => {
  return (
    <div className="field-container">
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default InputField;
