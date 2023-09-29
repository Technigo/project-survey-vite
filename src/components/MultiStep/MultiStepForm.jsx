import { useState } from "react";
import { Age } from "./Age";
import { Trust } from "./Trust";
import { Movie } from "./Movie";
import { Potato } from "./Potato";
import { Email } from "./Email";
import { Name } from "./Name";
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

  const updateFormData = (field, value) => {
    setFormData((previous) => ({ ...previous, [field]: value }));
  };

  const [currentStep, setCurrentStep] = useState(1);

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
        return formData.name.length >= 3;
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
    console.log(formData);
    const formattedData = `
    Name: ${formData.name}
    Age: ${formData.age}
    Email: ${formData.email}
    Potato: ${formData.potato}
    Trust: ${formData.trust}
    Movie: ${formData.movie}
  `;
    alert(formattedData);
  };

  return (
    <div>
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
            Submit Form
          </button>
        )}
      </div>
    </div>
  );
};
