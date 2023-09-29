import { useState } from "react";

// This function is intended to handle the transition to the next question in the form.  It also establishes two pieces of state: 'currentQuestion' to keep track of the current question number, and 'formData' to hold form data including fields like username, gender, age, personality, chosenCat, and catName.

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
  // This function updates the form data and continue to the next question. 
  const handleNextQuestion = (data) => {
    //  This is a functional update. It takes the previous state 'prevData', spreads it's properties '...prevData', and then spreads the properties of the new data. This effectively merges the previous form data with the new data.
    setFormData((prevData) => ({ ...prevData, ...data }));
    // This is a functional update that takes the previous state 'prevStep' and increments it by 1 (going forward to the next question).
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
