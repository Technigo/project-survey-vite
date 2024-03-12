import { useState } from "react";
import { QuestionOne } from "./components/QuestionOne";
import { QuestionTwo } from "./components/QuestionTwo";
import { QuestionThree } from "./components/QuestionThree";
import { QuestionFour } from "./components/QuestionFour";
import { Summary } from "./components/Summary";

export const App = () => {
  //reference to the state of the form
  const [formData, setFormData] = useState({
    whatIs: "",
    variable: "",
    datatypes: "",
    companiesReact: "",
  });

  //reference to the state of the step
  const [currentStep, setCurrentStep] = useState(0);

  //function to update the step
  const nextStep = () => {
    console.log(currentStep, "before if");
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    console.log(currentStep, "after if");
  };

  // function to update the form data
  // const updateForm = (form) => {
  //   setFormData(form);
  // };

  //submit form function
  //set currentStep to 5 to separate from questions
  const submit = () => {
    setCurrentStep(5);
    // updateForm(formData);
  };

  return (
    <div className="container">
      <h2>This is the survey!</h2>
      <div className="question-container">
        {currentStep !== 5 && (
          <div className="topic">
            Please answer these questions about Javascript and React
          </div>
        )}
        {currentStep === 1 && <QuestionOne />}
        {currentStep === 2 && <QuestionTwo />}
        {currentStep === 3 && <QuestionThree />}
        {currentStep === 4 && <QuestionFour />}
        {currentStep === 5 && <Summary formData={formData} />}
        <div className="footer">
          {currentStep < 4 && currentStep > 0 && (
            <button className="button next" onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === 4 && (
            <button className="button submit" onClick={submit}>
              Submit
            </button>
          )}
          {currentStep === 0 && (
            <button className="button start" onClick={nextStep}>
              Start!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
//one component per question and one for summary. Components should keep the heading and the buttons/select/checkboxes
//Summary has own design?
