import { useState } from "react";
import { Name } from "./name";
import { Age } from "./age";
import { Workrole } from "./workrole";
import { Favorite } from "./favorite";
import { Feeling } from "./feeling";
import { FinalStory } from "./finalStory";
import { SecondFavorite } from "./secondFavorite";

export const MultiStepFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    workrole: "",
    favorite: "",
    secondFavorite: "",
    feeling: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      name: "",
      age: "",
      workrole: "",
      favorite: "",
      secondFavorite: "",
      feeling: "",
    });
  };

  const submitForm = () => {
    setCurrentStep(7);
  };

  return (
    <div>
      {currentStep === 1 && (
        <>
          <h1>Welcome to our survey!</h1>
          <Name value={formData.name} updateFormData={updateFormData} />
        </>
      )}

      {currentStep === 2 && (
        <Age value={formData.age} updateFormData={updateFormData} />
      )}

      {currentStep === 3 && (
        <Workrole value={formData.workrole} updateFormData={updateFormData} />
      )}

      {currentStep === 4 && (
        <Favorite value={formData.favorite} updateFormData={updateFormData} />
      )}

      {currentStep === 5 && (
        <SecondFavorite
          value={formData.secondFavorite}
          updateFormData={updateFormData}
        />
      )}

      {currentStep === 6 && (
        <Feeling value={formData.feeling} updateFormData={updateFormData} />
      )}

      {currentStep === 7 && (
        <FinalStory
          age={formData.age}
          name={formData.name}
          workrole={formData.workrole}
          favorite={formData.favorite}
          secondFavorite={formData.secondFavorite}
          feeling={formData.feeling}
        />
      )}

      <div className="multi-step-form">
        {currentStep === 1 && null}
        {currentStep > 1 && currentStep < 7 && (
          <button onClick={prevStep}>Back</button>
        )}
        {currentStep < 6 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          currentStep === 6 && <button onClick={submitForm}>Submit!</button>
        )}

        {currentStep === 7 && (
          <button onClick={resetForm}>Do the survey again 👍</button>
        )}
      </div>
    </div>
  );
};
