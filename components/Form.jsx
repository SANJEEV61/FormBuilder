"use client";

import { useState } from "react";
import InputField from "./InputField";
import { validateForm } from "../utils/validation.js";
import { useFormContext } from "../context/FormContext";

const Form = () => {
  const { setSubmittedData } = useFormContext();

  const [values, setValues] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setValues({ name: "", age: "", email: "", phone: "" });
    setErrors({});
    setSubmittedData(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedData(values);
  };

  return (
    <form className="form-box" onSubmit={handleSubmit} noValidate>
      <h2>Form Builder</h2>

      <InputField
        label="Name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />

      <InputField
        label="Age"
        name="age"
        type="text"
        value={values.age}
        onChange={handleChange}
        error={errors.age}
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        label="Phone Number"
        name="phone"
        type="text"
        value={values.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <div className="btn-group">
        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
