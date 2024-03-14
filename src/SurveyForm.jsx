import { useState } from "react";
import { TextInput } from "./TextInput";
import { SelectOption } from "./SelectOption";
import { RadioButtons } from "./RadioButtons";
import { RangeSlider } from "./RangeSlider";
import { SurveySummary } from "./SurveySummary";
import "./SurveyForm.css";

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
    valueKey: "summer",
    question: "How much do you want summer right now?",
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
    summer: 0,
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

  // if "currentStepDetails.answerRequired" means it is true (required to answer) AND "!currentStepValue" means it is false = empty -> error shows up
  const nextStep = () => {
    if (currentStepDetails.answerRequired && !currentStepValue) {
      setError("Hey! You forgot to answer!");
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
    // prevent reloading the page when you click submit
		event.preventDefault();
		// if it is not the last step, move to next step
    if (currentStep < STEPS.length - 1) {
      nextStep();
    } else {
      submitSurvey();
    }
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
          <form className="form" onSubmit={handleSubmit}>
            <div className="questions">
              <currentStepDetails.Component
                value={surveyData[currentStepDetails.valueKey]}
                updateSurveyData={updateSurveyData}
                {...currentStepDetails}
              />
            </div>
            <div className="button">
              {currentStep > 0 && (
                <button
                  type="button"
                  style={{ backgroundColor: "#0018A4", color: "#ffffff" }}
                  onClick={prevStep}
                >
                  Back
                </button>
              )}
              {currentStep < STEPS.length - 1 ? (
                <button
                  type="button"
                  style={{ backgroundColor: "#0018A4", color: "#ffffff" }}
                  onClick={nextStep}
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  style={{ backgroundColor: "#0018A4", color: "#ffffff" }}
                  onClick={submitSurvey}
                >
                  Submit
                </button>
              )}
            </div>
            <div>{error && <p>Error: {error}</p>}</div>
            <div className="donut-img">
              <img
                src="./src/assets/pinkdonut.png"
                alt="pink donut with sprinkles"
              />
            </div>
          </form>
        )
      }
    </>
  );
};
