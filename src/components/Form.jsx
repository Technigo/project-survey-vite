import { useState } from "react";
import { Hero } from "./Hero";
import { Superpower } from "./Superpower";
import { Weakness } from "./Weakness";
import { Villain } from "./Villain";
import { Story } from "./stories/Story";

export const Form = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    hero: "",
    superpower: "",
    weakness: "",
    villain: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

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
    // alert(summary);
    setFormSubmitted(true);

    //Need to adjust prompts for male/female/neither
    // if (formData.superpower === "flight" && formData.weakness === "blind") {
    //   alert(
    //     <Story1
    //       hero={formData.hero}
    //       superpower={formData.superpower}
    //       weakness={formData.weakness}
    //       villain={formData.villain}
    //     />
    //   );
    // }
  };

  return (
    <div className="storyForm">
      <div className="transparentBackground">
        <div className="questionContainer">
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
            <Weakness
              value={formData.weakness}
              updateFormData={updateFormData}
            />
          )}
          {currentQuestion === 4 && !formSubmitted && (
            <Villain value={formData.villain} updateFormData={updateFormData} />
          )}
          <div>
            {currentQuestion > 1 && !formSubmitted && (
              <button onClick={previousQuestion}>Back</button>
            )}
            {currentQuestion < 4 && (
              <button onClick={nextQuestion}>Next</button>
            )}
            {currentQuestion === 4 && !formSubmitted && (
              <button onClick={submitForm}>Submit</button>
            )}
            {formSubmitted && (
              <Story
                hero={formData.hero}
                superpower={formData.superpower}
                weakness={formData.weakness}
                villain={formData.villain}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* <a href="https://www.freepik.com/free-vector/superhero-hand-strong_25067091.htm#query=hero&position=1&from_view=search&track=sph">Image by gstudioimagen1</a> on Freepik */

// Photo by <a href="https://unsplash.com/@dancristianpaduret?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dan Cristian Pădureț</a> on <a href="https://unsplash.com/photos/3bb9RUp86M0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
