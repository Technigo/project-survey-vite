import { useState } from "react";
import { NameInput } from "./NameInput/NameInput.jsx";
import { SeasonRadio } from "./SeasonRadio/SeasonRadio.jsx"
import { ActivitySelect } from "./ActivitySelect/ActivitySelect.jsx";
import { EcoCheck } from "./EcoCheck/EcoCheck.jsx";
import { FormMatch } from "./FormMatch/FormMatch.jsx"

import "./Form.css"

export const Form  = () => {

  const [formData, setFormData] = useState({
    name: "",
    season: "",
    activity: "",
    eco: "",
  });

  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };  

  const submitForm = (matchingDestination) => {
   
    if (matchingDestination) {
      setCurrentStep(currentStep + 1)
    } else {
      alert("No matching destination found. Please try again.");
    }
  };

    return (
      <div>
      {/* Render the Name component if on step 1 */}
      {currentStep === 1 && (
        <NameInput value={formData.name} updateFormData={updateFormData} />
      )}
      {/* Render the Season component if on step 2 */}
      {currentStep === 2 && (
        <SeasonRadio value={formData.season} updateFormData={updateFormData} />
      )}
      {/* Render the Activity component if on step 3 */}
      {currentStep === 3 && (
        <ActivitySelect value={formData.activity} updateFormData={updateFormData} />
      )}
      {/* Render the Eco component if on step 4 */}
      {currentStep === 4 && (
        <EcoCheck value={formData.eco} updateFormData={updateFormData} />
      )}
      {currentStep >= 5 && (
        <FormMatch name={formData.name} season={formData.season} activity={formData.activity} eco={formData.eco} />
      )}
      <div>
        {/* Show the "Back" button if not on the first step */}
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 4 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={submitForm}>Submit Form</button>
        )}
      </div>
    </div>
  );
}