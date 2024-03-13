import { useState } from "react";
import { TextInput } from "./TextInput";
import { SelectOption } from "./SelectOption";
import { RadioButtons } from "./RadioButtons";
import { RangeSlider } from "./RangeSlider";
import { SurveySummary } from "./SurveySummary";

// Static data = data that does not change during the execution of a program / using any component props or state
// 1. Put outside component (Global scope)
// 2. Use uppercase (STEP)
const STEPS = [
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

// 1. Initializing (初期化)
export const SurveyForm = () => {
  // surveyData = user's data (set up /initialized by an empty string and 50)
  const [surveyData, setSurveyData] = useState({
    tvShow: "",
    harryPotter: "",
    loudOrNoisy: "",
    goodKid: "",
    satisfaction: 50,
  });

  // The initial value is quesiton no.1
  const [currentStep, setCurrentStep] = useState(0);

  // Initializes a state to keep track of whether the survey has been submitted
  //without this there is no way to track whether the survey has been submitted
  const [submit, setSubmit] = useState(false);

  // Initializes a state with the value null since there is no error message in the beggining
  const [error, setError] = useState(null);

  // 2. Updating the data
  // current step -> STEPS's currentStep , value is surveyData's valueKey
  const currentStepDetails = STEPS[currentStep];
  const currentStepValue = surveyData[currentStepDetails.valueKey];

  // Function to update survey data
  // when you call any function, only POSITION matters in parameters, not names. e.g. in SelectOption.jsx
  // key = 1st position = valueKey
  // value = 2nd position = event.target.value
  const updateSurveyData = (key, value) => {
    // ... (spread syntax) = to copy existing state/data
    // [key]: value = update the key with new value
    // why write like ({ ...values, [key]: value }) -> key is dynamic, [] is how you write dynamic key in js rule
    setSurveyData((values) => ({ ...values, [key]: value }));
    // resets any error that might have occurred, returning to a state where there are no errors
    setError(null);
  };

  // 3. "back" "next" steps
  // When currentStep is more than 0, prevStep is (currentStep - 1)
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setError(null);
    }
  };

  // if "currentStepDetails.answerRequired" means it is true (required to answer) AND "!currentStepValue! means it is false = empty -> error shows up
  const nextStep = () => {
    if (currentStepDetails.answerRequired && !currentStepValue) {
      setError("Answer required");
      return;
    }

    // Check user can move forward or not
    // currentStep < STEPS.length - 1 = check user is in last step or not
    const canMoveForward = currentStep < STEPS.length - 1;
    if (canMoveForward) {
      // Increase 'currentStep' if it's not the last step.
      setCurrentStep(currentStep + 1);
      // Reset errors
      setError(null);
    }
  };

  // Function to mark the survey as submitted
  const submitSurvey = () => {
    setSubmit(true); // Set 'submit' state to true - written in line 67
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // prevent reloading the page when you click submit
  };

  return (
    // A React component can only return (render) one child, so you can use a fragment (<>) to wrap multiple children
    <>
      {
        // Check if the survey has been submitted using the 'submit' state.
        submit ? (
          // If the survey has been submitted ('submit' is true), render the SurveySummary component.
          // Pass the 'surveyData' as props to SurveySummary, so it can display the collected data.
          <SurveySummary surveyData={surveyData} steps={STEPS} />
        ) : (
          // If the survey has not been submitted ('submit' is false), render the survey form.
          <form onSubmit={handleSubmit}>
            <div>
              {/* Render the component for the current survey step.
                The component type is determined dynamically based on the 'currentStepDetails.Component'.
                This allows for different input types (text, select, radio buttons, etc.) at different steps.
                The 'value' prop passes the current value for this step from 'surveyData'.
                The 'updateSurveyData' function is passed to allow the component to update the survey data.
                Spread 'currentStepDetails' to pass additional props like 'question' and 'options' to the component. ??*/}
              <currentStepDetails.Component
                value={surveyData[currentStepDetails.valueKey]}
                updateSurveyData={updateSurveyData}
                {...currentStepDetails}
              />
            </div>
            <div>
              {/* Render a "Back" button if the current step is greater than 1 (not the first step).
                Clicking this button calls 'prevStep', moving the user to the previous step. */}
              {currentStep > 0 && <button onClick={prevStep}>Back</button>}
              {/* Conditional rendering for the next button:
                - If the current step is less than the total number of steps, render a "Continue" button.
                  Clicking this button calls 'nextStep', moving the user to the next step.
                - If the current step is the last step, render a "Submit" button instead.
                  Clicking this button calls 'submitSurvey', marking the survey as submitted. */}
              {currentStep < STEPS.length - 1 ? (
                <button onClick={nextStep}>Continue</button>
              ) : (
                <button onClick={submitSurvey}>Submit</button>
              )}
              {error && <p>Error: {error}</p>}
            </div>
          </form>
        )
      }
    </>
  );
};

SurveyForm
