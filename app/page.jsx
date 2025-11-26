"use client";

import { FormProvider, useFormContext } from "../context/FormContext";
import Form from "../components/Form";

const DisplayData = () => {
  const { submittedData } = useFormContext();

  if (!submittedData) return null;

  return (
    <div className="data-box">
      <h3>Submitted Data</h3>
      <pre>{JSON.stringify(submittedData, null, 2)}</pre>
    </div>
  );
};

export default function Page() {
  return (
    <FormProvider>
      <div className="container">
        <Form />
        <DisplayData />
      </div>
    </FormProvider>
  );
}
