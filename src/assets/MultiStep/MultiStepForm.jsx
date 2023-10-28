import { useState } from "react";

import { TravelDestinationInput } from "./TravelDestinationInput";
import { ReasonTravel } from "./ReasonTravel";
import { FavoriteActivity } from "./FavouriteActivity";
import { Age } from "./Age";
import { Name } from "./Name";
import { Color } from "./Color";
import { Season } from "./Season";
import { SummaryData } from "./SummaryData";
import { SummaryKeys } from "./summaryKeys";

import "./MultiStepForm.css";

const initialSummary = {
  [SummaryKeys.Destination]: "",
  [SummaryKeys.Reason]: "",
  [SummaryKeys.Activity]: "",
  [SummaryKeys.Name]: "",
  [SummaryKeys.Age]: "",
  [SummaryKeys.Email]: "",
  [SummaryKeys.Color]: "",
  [SummaryKeys.Season]: "",
};

const isUndefinedOrEmpty = (value) => {
  return value === undefined || value.trim() === "";
};

export const MultiStepForm = () => {
  const [summary, setSummary] = useState(initialSummary);

  const [currentStep, setCurrentStep] = useState(0);
  const [isSurveySubmitted, setIsSurveySubmitted] = useState(false);

  const updateSummary = (field, value) => {
    setSummary((values) => ({ ...values, [field]: value }));
  };

  const surveyStepContents = [
    {
      name: "Travel destination",
      valueKey: SummaryKeys.Destination,
      content: (
        <TravelDestinationInput
          value={summary[SummaryKeys.Destination]}
          updateDestination={(value) =>
            updateSummary(SummaryKeys.Destination, value)
          }
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[SummaryKeys.Destination]),
    },
    {
      name: "Travel Reason",
      valueKey: SummaryKeys.Reason,
      content: (
        <ReasonTravel
          value={summary[SummaryKeys.Reason]}
          updateReason={(value) => updateSummary(SummaryKeys.Reason, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[SummaryKeys.Reason]),
    },
    {
      name: "Favourite Activity",
      valueKey: SummaryKeys.Activity,
      content: (
        <FavoriteActivity
          value={summary[SummaryKeys.Activity]}
          updateActivity={(value) => updateSummary(SummaryKeys.Activity, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[SummaryKeys.Activity]),
    },
    {
      name: "Name",
      valueKey: SummaryKeys.Name,
      content: (
        <Name
          value={summary[SummaryKeys.Name]}
          updateName={(value) => updateSummary(SummaryKeys.Name, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[SummaryKeys.Name]),
    },
    {
      name: "Age",
      valueKey: SummaryKeys.Age,
      content: (
        <Age
          value={summary[SummaryKeys.Age]}
          updateAge={(value) => updateSummary(SummaryKeys.Age, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[SummaryKeys.Age]),
    },
    {
      name: "Favorite Color",
      valueKey: SummaryKeys.Color,
      content: (
        <Color
          value={summary[SummaryKeys.Color]}
          updateColor={(value) => updateSummary(SummaryKeys.Color, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[SummaryKeys.Color]),
    },
    {
      name: "Favorite Season",
      valueKey: SummaryKeys.Season,
      content: (
        <Season
          value={summary[SummaryKeys.Season]}
          updateSeason={(value) => updateSummary(SummaryKeys.Season, value)}
        />
      ),
      isValid: () => !isUndefinedOrEmpty(summary[SummaryKeys.Season]),
    },
  ];

  const nextStep = () => {
    if (currentStep < surveyStepContents.length - 1)
      setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setIsSurveySubmitted(true);
  };

  const handleStartSurveyClick = () => {
    setSummary(initialSummary);
    setCurrentStep(0);
    setIsSurveySubmitted(false);
  };

  return (
    <div className="container">
      {!isSurveySubmitted && (
        <div>
          {surveyStepContents[currentStep].content}

          <div className="footer">
            {currentStep > 0 && <button onClick={prevStep}>Back</button>}
            {currentStep < surveyStepContents.length - 1 ? (
              <button
                onClick={nextStep}
                disabled={!surveyStepContents[currentStep].isValid()}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!surveyStepContents[currentStep].isValid()}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
      {isSurveySubmitted && (
        <>
          <p>Summary:</p>
          <div className="summary">
            {surveyStepContents.map((stepData, index) => (
              <SummaryData
                key={index}
                name={stepData.name}
                value={summary[stepData.valueKey]}
              />
            ))}
          </div>
          <button onClick={handleStartSurveyClick}>Start survey again!</button>
        </>
      )}
    </div>
  );
};
