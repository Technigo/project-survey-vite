import { useState } from "react";
import { Age } from "./components/Age";
import { Name } from "./components/Name";
import { BloodType } from "./components/BloodType";
import { Allergies } from "./components/Allergies";
import { Submit } from "./components/Submit";
import { Confirmation } from "./components/Confirmation";

export const MultiStepForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodType: "",
    allergies: "",

    submit: "",
    confirmation: "",
  });
  // Function to update form data based on field and value
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // function to submit the form itself
  const submitForm = () => {
    const formattedData = `
    Name: ${formData.name}
    Age: ${formData.age}
    Bloodtype: ${formData.bloodType}
    Allergies: ${formData.allergies}
   `;

    setFormData((previous) => ({
      ...previous,
      formattedData: formattedData,
    }));
    setCurrentStep(5);
  };

  const progress = ((currentStep - 1) / 5) * 100;

  return (
    <div className="steps">
      {currentStep === 1 && (
        <Name value={formData.name} updateFormData={updateFormData} />
      )}

      {currentStep === 2 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}

      {currentStep === 3 && (
        <BloodType value={formData.bloodType} updateFormData={updateFormData} />
      )}

      {currentStep === 4 && (
        <Allergies value={formData.allergies} updateFormData={updateFormData} />
      )}

      {currentStep === 5 && <Submit formData={formData} />}

      {currentStep === 6 && (
        <Confirmation
          name={formData.name}
          age={formData.age}
          bloodType={formData.bloodType}
          allergies={formData.allergies}
        />
      )}

      <div className="button-box">
        {/* Show the "Back" button if not on the first step */}
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 6 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={submitForm}>Submit Form</button>
        )}
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          {`${progress}%`}
        </div>
      </div>
    </div>
  );
};
