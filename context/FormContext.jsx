"use client";
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <FormContext.Provider value={{ submittedData, setSubmittedData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
