/* eslint-disable react/prop-types */
import { useState } from "react";

import { SpiritQuestion } from "./SpiritQuestion";
import { NameQuestion } from "./NameQuestion";
import { AgeQuestion } from "./AgeQuestion";
import { PreferenceQuestion } from "./PreferenceQuestion";
import { LastPage } from "./LastPage";

export const Form = ({ headerVisibleControl, headerContent, summaryPage }) => {
  let setLastP = headerVisibleControl;
  let setLastHeader = headerContent;
  let lastP = summaryPage;

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

  const handleTryAgain = () => {
    setFormData({
      name: "",
      age: "",
      preference: "",
      spirit: "",
    })
    setLastP(false)
    setCurrentStep(1)
  }

  /// GOING BACK AND FORTH BETWEEN QUESTIONS
  // State to track the current step in the form
  const [currentStep, setCurrentStep] = useState(1);
  // Function to move to the next step in the form
  const nextStep = () => {
    if (currentStep === 1 && !isAgeValid) {
      alert("Should you really be doing this, you're not old enough!");
    }
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };


  return (
    <div className="theFormContainer">
      <form id="theForm" onSubmit={(event) => event.preventDefault()}>

        {/* Render the Name & Age component on step 1 */}
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

        {/* Render the preference component on step 2 */}
        <div className={`question ${currentStep !== 2 ? "hidden" : ""}`}>
          {currentStep === 2 && (
            <PreferenceQuestion
              value={formData.preference}
              setValue={updateFormData}
            />
          )}
        </div>

        {/* Render the spirit component on step 3 */}
        <div className={`question ${currentStep !== 3 ? "hidden" : ""}`}>
          {currentStep === 3 && (
            <SpiritQuestion value={formData.spirit} setValue={updateFormData} />
          )}
        </div>

        <div className={`question lastP ${currentStep !== 4 ? "hidden" : ""}`}>
          {currentStep >= 4 && <LastPage information={formData} headerVisibility={setLastP} headerContent={setLastHeader} />}
        </div>

        {/* Buttons for each page. "Back"-button is there, but not on page 1. "Next"-button becomes "submit"-button on last page */}
        {
          !lastP &&
            <div className="button-container">
              { currentStep > 1 && (
                <button onClick={prevStep} className="button back">
                  Back
                </button>
              )}
              { currentStep < 3 ? (
                <button onClick={nextStep} className="button next">
                  Next
                </button>
              ) : (
                <button onClick={handleSubmit} className="button submit">
                  WHAT DRINK SUITS YOU?
                </button>
              )}
            </div>
        }
        {
          lastP && <div className="button-container">
            <button onClick={handleTryAgain} className="button">
              Try again
            </button>
          </div>
        }
      </form>
    </div>
  );
};
