import { useState } from "react";
import { TextInput } from "./TextInput";
import { SelectOption } from "./SelectOption";
import { RadioButtons } from "./RadioButtons";
import { RangeSlider } from "./RangeSlider";
import { SurveySummary } from "./SurveySummary";

// Define the main component for our survey form
export const SurveyForm = () => {
  // Initialize state for holding responses. This object will store all user inputs.
  const [surveyData, setSurveyData] = useState({
    tvShow: "",
    harryPotter: "",
    loudOrNoisy: "",
    goodKid: "",
    satisfaction: 50,
  });

  // Initialize state to track which step of the survey the user is on.
  const [currentStep, setCurrentStep] = useState(1);

  // Initialize state to track if the survey has been submitted.
  const [submit, setSubmit] = useState(false);

  // Function to update survey data. Takes a field name and its new value as arguments.
  const updateSurveyData = (field, value) => {
    // Use spread syntax (...) to copy existing state, then update the field with new value.
    setSurveyData((values) => ({ ...values, [field]: value }));
  };

  // Function to advance to the next survey step.
  const nextStep = () => {
    // Increment 'currentStep' if it's not the last step.
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to go back to the previous survey step.
  const prevStep = () => {
    // Decrement 'currentStep' if it's not the first step.
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Function to mark the survey as submitted.
  const submitSurvey = () => {
    setSubmit(true); // Set 'submit' state to true.
  };

  // Define the structure of the survey, including questions and input types.
  const steps = [
    // For each step, we define the component to render, the key for storing its value,
    // the question text, and other properties as needed.
    {
      Component: TextInput,
      valueKey: "tvShow",
      question: "What’s your guilty pleasure TV show?",
      answerRequired: true,
    },
    {
      Component: SelectOption,
      valueKey: "harryPotter",
      question: "Which Harry Potter house best describes your values?",
      options: [
        { name: "Gryffindor for bravery", valueKey: "gryffindor" },
        { name: "Hufflepuff for patience", valueKey: "hufflepuff" },
        { name: "Ravenclaw for wit", valueKey: "ravenclaw" },
        { name: "Slytherin for ambition", valueKey: "slytherin" },
      ],
      answerRequired: true,
    },
    {
      Component: RadioButtons,
      valueKey: "loudOrNoisy",
      question: "Loud talker or a noisy eater?",
      options: [
        { name: "Loud talker", valueKey: "loud" },
        { name: "Noisy eater", valueKey: "noisy" },
      ],
      answerRequired: true,
    },
    //intermediate stretch goal
    {
      Component: RangeSlider,
      valueKey: "satisfaction",
      question: "How satisfied are you with our service?",
      min: 0,
      max: 100,
      step: 1,
      answerRequired: true,
    },
  ];

  //intermediate stretch goal
  const handleSubmit = (event) => {
    event.preventDefault(); // Stop the form from submitting in the traditional way.
  };

  // Determine details of the current step based on 'currentStep' state.
  const currentStepDetails = steps[currentStep - 1];

  // Render the form or the survey summary based on the survey submission state.
  return (
    <>
      {
        // Check if the survey has been submitted using the 'submit' state.
        submit ? (
          // If the survey has been submitted ('submit' is true), render the SurveySummary component.
          // Pass the 'surveyData' as props to SurveySummary, so it can display the collected data.
          <SurveySummary surveyData={surveyData} />
        ) : (
          // If the survey has not been submitted ('submit' is false), render the survey form.
          <form onSubmit={handleSubmit}>
            <div>
              {/* Render the component for the current survey step.
                The component type is determined dynamically based on the 'currentStepDetails.Component'.
                This allows for different input types (text, select, radio buttons, etc.) at different steps.
                The 'value' prop passes the current value for this step from 'surveyData'.
                The 'updateSurveyData' function is passed to allow the component to update the survey data.
                Spread 'currentStepDetails' to pass additional props like 'question' and 'options' to the component. */}
              <currentStepDetails.Component
                value={surveyData[currentStepDetails.valueKey]}
                updateSurveyData={updateSurveyData}
                {...currentStepDetails}
              />
            </div>
            <div>
              {/* Render a "Back" button if the current step is greater than 1 (not the first step).
                Clicking this button calls 'prevStep', moving the user to the previous step. */}
              {currentStep > 1 && <button onClick={prevStep}>Back</button>}
              {/* Conditional rendering for the next button:
                - If the current step is less than the total number of steps, render a "Continue" button.
                  Clicking this button calls 'nextStep', moving the user to the next step.
                - If the current step is the last step, render a "Submit" button instead.
                  Clicking this button calls 'submitSurvey', marking the survey as submitted. */}
              {currentStep < steps.length ? (
                <button onClick={nextStep}>Continue</button>
              ) : (
                <button onClick={submitSurvey}>Submit</button>
              )}
            </div>
          </form>
        )
      }
    </>
  );
};
