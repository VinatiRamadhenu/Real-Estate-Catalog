import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState( 
[]);

  const saveFormData = (formName, data) => {
    setFormData(prevData => ({
      ...prevData,
      [formName]: data
    }));
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, saveFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }

  return context;
};


