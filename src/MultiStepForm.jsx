import { useState } from "react";
import { Age } from "./components/Age";
import { Name } from "./components/Name";
import { BloodType } from "./components/BloodType";
import { Allergies } from "./components/Allergies";

// import { Submit } from "./components/Submit";
//import { Confirmation } from "./components/Confirmation";

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

  /// GOING BACK AND FORTH BETWEENQUESTIONS

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);
  // Function to move to the next step in the form
  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  // function to submit the form itself
  const submitForm = () => {
    console.log(formData);
    const formattedData = `
    Name: ${formData.name}
    Age: ${formData.age}
    Bloodtype: ${formData.bloodType}
    Allergies: ${formData.allergies}
   
    
  `;
    alert(formattedData);
  };
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

      {/* Render the Artist component if on step 6 */}
      {/* {currentStep === 5 && (
        // <Submit value={formData.submit} updateFormData={updateFormData} />
      )} */}
      <div>
        {/* Show the "Back" button if not on the first step */}
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 5 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={submitForm}>Submit Form</button>
        )}
      </div>
    </div>
  );
};
