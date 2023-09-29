import { useState } from "react";

import { SpiritQuestion } from "./SpiritQuestion";
import { NameQuestion } from "./NameQuestion";
import { AgeQuestion } from "./AgeQuestion";
import { PreferenceQuestion } from "./PreferenceQuestion";
import { LastPage } from "./LastPage";

export const Form = () => {
  //Set state to store form data
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    preference: "",
    spirit: "",
  });

  //Set state to validate the users age
  const [isAgeValid, setIsAgeValid] = useState(true);

  //Update form data
  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    nextStep();
  };

  /// GOING BACK AND FORTH BETWEENQUESTIONS

  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);
  // Function to move to the next step in the form
  const nextStep = () => {
    if (currentStep === 1 && !isAgeValid) {
      alert("You must be 18 or older to proceed!");
      return;
    }
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="theFormContainer">
      <form id="theForm" onSubmit={(event) => event.preventDefault()}>
        {/* Render the Name & Age component if on step 1 */}
        <div className={`question ${currentStep !== 1 ? "hidden" : ""}`}>
          {currentStep === 1 && (
            <NameQuestion value={formData.name} setValue={updateFormData} />
          )}
        </div>
        <div className={`question ${currentStep !== 1 ? "hidden" : ""}`}>
          {currentStep === 1 && (
            <AgeQuestion
              value={formData.age}
              setValue={updateFormData}
              setIsAgeValid={setIsAgeValid}
            />
          )}
        </div>

        {/* Render the preference component if on step 2 */}
        <div className={`question ${currentStep !== 2 ? "hidden" : ""}`}>
          {currentStep === 2 && (
            <PreferenceQuestion
              value={formData.preference}
              setValue={updateFormData}
            />
          )}
        </div>

        {/* Render the spirit component if on step 3 */}
        <div className={`question ${currentStep !== 3 ? "hidden" : ""}`}>
          {currentStep === 3 && (
            <SpiritQuestion value={formData.spirit} setValue={updateFormData} />
          )}
        </div>

        <div className={`question lastP ${currentStep !== 4 ? "hidden" : ""}`}>
          {currentStep >= 4 && <LastPage information={formData} />}
        </div>

        {/* Buttons for each page. "Back"-button is there, but not on page 1. "Next"-button becomes "submit"-button on last page */}
        <div className="button-container">
          {currentStep > 1 && (
            <button onClick={prevStep} className="button back">
              Back
            </button>
          )}
          {currentStep < 3 ? (
            <button onClick={nextStep} className="button next">
              Next
            </button>
          ) : (
            <button onClick={handleSubmit} className="button submit">
              WHAT DRINK SUITS YOU?
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
