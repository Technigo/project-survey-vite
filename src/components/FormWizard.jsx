import React, { useState } from 'react';
import Movie from './Movie.jsx';
import DateQuestion from './DateQuestion.jsx'; // Assuming Date is renamed to avoid conflict with JS Date
import Time from './Time.jsx';
import Quantity from './Quantity.jsx';
import Name from './Name.jsx';
import Mail from './Mail.jsx';
import Summary from './Summary.jsx';

const FormWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    movie: '',
    date: '',
    time: '',
    quantity: 1, 
    name: '',
    email: '', 
  });

  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const updateFormData = (field, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
    else submitForm();
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const submitForm = () => {
    setFormSubmitted(true);
  };


  if (formSubmitted) {
    return <Summary formData={formData} />;
  }

  return (
    <>
      {currentStep === 1 && <Movie formData={formData} updateFormData={updateFormData} />}
      {currentStep === 2 && <DateQuestion formData={formData} updateFormData={updateFormData} />}
      {currentStep === 3 && <Time formData={formData} updateFormData={updateFormData} />}
      {currentStep === 4 && <Quantity formData={formData} updateFormData={updateFormData} />}
      {currentStep === 5 && <Name formData={formData} updateFormData={updateFormData} />}
      {currentStep === 6 && <Mail formData={formData} updateFormData={updateFormData} />}
      {currentStep === 7 && <Summary formData={formData} />}

      <div className="flex flex-row relative justify-between mt-5">
        {currentStep > 1 && (
          <button onClick={prevStep} className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-800 focus:ring-red-800">Back</button>
        )}
        {currentStep < 6 ? (
          <button onClick={nextStep} className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-800 focus:ring-red-800">Next</button>
        ) : (
          <button onClick={submitForm} className="text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-red-600 hover:bg-red-800 focus:ring-red-800">Submit</button>
        )}
      </div>
    </>
  );
};

export default FormWizard;
