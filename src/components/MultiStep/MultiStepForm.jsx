import React, { useState } from "react";
import { Age } from "./Age";
import { Trust } from "./Trust";
import { Movie } from "./Movie";
import { Potato } from "./Potato";
import { Email } from "./Email";
import { Name } from "./Name";
import { ThankYou } from "./ThankYou";
import "../../App.css";

export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    potato: "",
    trust: "",
    movie: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6 && validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return formData.name.trim().length >= 3;
      case 2:
        const age = parseInt(formData.age, 10);
        return !isNaN(age) && age >= 1 && age <= 99;
      case 3:
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(formData.email);
      case 4:
        return formData.potato !== "";
      case 5:
        return formData.trust !== "";
      case 6:
        return formData.movie !== "";
      default:
        return true;
    }
  };

  const submitForm = () => {
    const formattedData = `You’re a ${formData.age} year old individual named ${formData.name}. You have a ${formData.trust}% trust in the government, and in your spare time you watch ${formData.movie} on repeat. When people ask what potato dish you want to become, you always answer: ${formData.potato}! You can be contacted at ${formData.email}.`;
    const alertMessage = "Read through the information we have collected about you. Click 'OK' to submit.\n\n" + formattedData;
    alert(alertMessage);

    setSubmitted(true);
  };

  const startSurvey = () => {
    setCurrentStep(1);
  };

  const restartSurvey = () => {
    setCurrentStep(1);
    setFormData({
      name: "",
      age: "",
      email: "",
      potato: "",
      trust: "",
      movie: "",
    });
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <ThankYou />
      ) : (
        <>
          <div className="button-container">
            {currentStep === 0 && (
              <div>
                <h6>⚠️ This survey assumes no responsibility or liability for any errors or omissions in the content of this site. The information contained in this site is provided on an &quot;as is&quot; basis with no guarantees of completeness, accuracy or usefulness.</h6>
                <div className="start-button">
                  <button onClick={startSurvey}>Start survey</button>
                </div>
              </div>
            )}
            {currentStep !== 0 && (
              <>
                {currentStep === 1 && (
                  <Name value={formData.name} updateFormData={updateFormData} />
                )}
                {currentStep === 2 && (
                  <Age value={formData.age} updateFormData={updateFormData} />
                )}
                {currentStep === 3 && (
                  <Email value={formData.email} updateFormData={updateFormData} />
                )}
                {currentStep === 4 && (
                  <Potato value={formData.potato} updateFormData={updateFormData} />
                )}
                {currentStep === 5 && (
                  <Trust value={formData.trust} updateFormData={updateFormData} />
                )}
                {currentStep === 6 && (
                  <Movie value={formData.movie} updateFormData={updateFormData} />
                )}
                <div>
                  {currentStep > 1 && <button onClick={prevStep}>Back</button>}
                  {currentStep < 6 ? (
                    <button onClick={nextStep} disabled={!validateStep(currentStep)}>
                      Next
                    </button>
                  ) : (
                    <button onClick={submitForm} disabled={!validateStep(currentStep)}>
                      Submit
                    </button>
                  )}
                  {currentStep === 6 && (
                    <button onClick={restartSurvey}>Restart</button>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
