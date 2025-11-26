export const validateForm = (values) => {
  let errors = {};

  // Name
  if (!values.name.trim()) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z ]+$/.test(values.name)) {
    errors.name = "Name must contain only letters";
  } else if (values.name.length < 3) {
    errors.name = "Name must be at least 3 characters";
  } else if (values.name.length > 25) {
    errors.name = "Name must be less than 25 characters";
  }

  // Age
  if (!values.age) {
    errors.age = "Age is required";
  } else if (isNaN(values.age)) {
    errors.age = "Age must be a number";
  } else if (values.age < 1 || values.age > 120) {
    errors.age = "Age must be between 1 and 120";
  }

  //Email
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(values.email)
  ) {
    errors.email = "Invalid email format";
  }

  // Phone Number
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^[0-9]+$/.test(values.phone)) {
    errors.phone = "Phone number must contain only numbers";
  } else if (values.phone.length !== 10) {
    errors.phone = "Phone number must be exactly 10 digits";
  }

  return errors;
};
