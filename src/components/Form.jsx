import { useState } from "react";
import { Hero } from "./Hero";
import { Superpower } from "./Superpower";
import { Weakness } from "./Weakness";
import { Villain } from "./Villain";

export const Form = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    hero: "",
    superpower: "",
    weakness: "",
    villain: "",
  });

  // Function to update form data based on field and value
  const updateFormData = (field, value) => {
    setFormData((previousData) => ({ ...previousData, [field]: value }));
  };

  // State to keep track of the current question in the form
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // Function to move to the next question in the form
  const nextQuestion = () => {
    if (currentQuestion < 4) setCurrentQuestion(currentQuestion + 1);
  };
  // Function to move to the previous question in the form
  const previousQuestion = () => {
    if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
  };

  // Function to submit the data entered in the form
  const submitForm = () => {
    console.log(formData);
    const summary = `
    Hero: ${formData.hero}
    Superpower: ${formData.superpower}
    Weakness: ${formData.weakness}
    Villain: ${formData.villain}`;
    alert(summary);
  };

  return (
    <div className="storyForm">
      {currentQuestion === 1 && (
        <Hero value={formData.hero} updateFormData={updateFormData} />
      )}
      {currentQuestion === 2 && (
        <Superpower
          value={formData.superpower}
          updateFormData={updateFormData}
        />
      )}
      {currentQuestion === 3 && (
        <Weakness value={formData.weakness} updateFormData={updateFormData} />
      )}
      {currentQuestion === 4 && (
        <Villain value={formData.villain} updateFormData={updateFormData} />
      )}
      <div>
        {currentQuestion > 1 && (
          <button onClick={previousQuestion}>Back</button>
        )}
        {currentQuestion < 4 && <button onClick={nextQuestion}>Next</button>}
        {currentQuestion === 4 && <button onClick={submitForm}>Submit</button>}
      </div>
    </div>
  );
};
