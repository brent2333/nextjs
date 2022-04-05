import { useState, createContext, useContext } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [data, setData] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}