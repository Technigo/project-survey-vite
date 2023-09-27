import { useState } from "react";
import "./NextQuestion.css";

const nextQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    gender: "",
    age: "",
    personality: "",
    chosenCat: "",
    catName: "",
  });

  const handleNextQuestion = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setCurrentQuestion((prevStep) => prevStep + 1);
  };

  return (
    <>
      {currentQuestion === 1 && <username onNext={handleNextQuestion} />}
      {currentQuestion === 2 && <gender onNext={handleNextQuestion} />}
      {currentQuestion === 3 && <age onNext={handleNextQuestion} />}
      {currentQuestion === 4 && <personality onNext={handleNextQuestion} />}
      {currentQuestion === 5 && <chosenCat onNext={handleNextQuestion} />}
      {currentQuestion === 6 && <catName onNext={handleNextQuestion} />}
      {currentQuestion > 6 && <catName onNext={handleNextQuestion} />}
      <div>
        <h3>Your cat {formData.username}</h3>
        <p>Name: {formData.catName}</p>
        <p>Chosen cat: {formData.chosenCat}</p>
        <p>Gender: {formData.gender}</p>
        <p>Age: {formData.age}</p>
        <p>Personality: {formData.personality}</p>
      </div>
    </>
  );
};

// //State to store form data
// const [currentStep, setCurrentStep] = useState(1);
// //Function to update for data based on field and value
// const updateFormData = {field, value} => {
//     setFormData((previous) => ({...previous, [field] : value}))
// //Function to move to the next step in the form
// const nextQuestion = () => {
//     if (currentStep < 6) setCurrentStep(currentStep + 1);
// }
// const prevQuestion = () => {
//     if (currentStep > 1) setCurrentStep(currentStep - 1);
// }
// //Function to submit form
// const submitForm = () => {
// }
// return;
// };
