import { useState } from "react";
import { TravelDestinationInput } from "./TravelDestinationInput";
import { ReasonTravel } from "./ReasonTravel";
import { FavoriteActivity } from "./FavouriteActivity";

export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: " ",
    reason: " ",
    activity: " ",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const submitForm = () => {
    console.log(formData);
    const formattedData = `
    Name: ${formData.name}
    Reason: ${formData.reason}
    Activity: ${formData.activity}`;
    alert(formattedData);
  };

  console.log(currentStep);
  return (
    <div>
      {currentStep == 1 && (
        <TravelDestinationInput
          value={formData.name}
          updateFormData={updateFormData}
        />
      )}
      {currentStep == 2 && (
        <ReasonTravel value={formData.reason} updateFormData={updateFormData} />
      )}
      {currentStep == 3 && (
        <FavoriteActivity
          value={formData.activity}
          updateFormData={updateFormData}
        />
      )}

      <div className="multi-step-form">
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 3 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={submitForm}>Submit</button>
        )}
      </div>
    </div>
  );
};
