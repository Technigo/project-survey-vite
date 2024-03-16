import React, { useState } from "react";
import { DropDown } from "./DropDown";
import { DropDown2 } from "./DropDown2";
import { TextInput } from "./TextInput";
import { RadioButtons } from "./RadioButtons";
import { RangeSlider } from "./RangeSlider";
import "./SurveyForm.css";

export const SurveyForm = ({ setFormData, showResult }) => {
  // State to hold the selected values and current step
  const [step, setStep] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedMusician, setSelectedMusician] = useState("");
  const [selectedMusicPreference, setSelectedMusicPreference] = useState("");
  const [selectedDiscovery, setSelectedDiscovery] = useState("");
  const [selectedRange, setSelectedRange] = useState("");

  // Functions to handle next and previous steps
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      musicGenre: selectedGenre,
      musician: selectedMusician,
      musicPreference: selectedMusicPreference,
      musicDiscovery: selectedDiscovery,
      musicRange: selectedRange
    };

    showResult();
    setFormData(formData);
  };

  // Render different components based on the current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return <DropDown handleChange={handleGenreChange} />;
      case 2:
        return <TextInput value={selectedMusician} handleChange={handleMusicianChange} />;
      case 3:
        return <RadioButtons handleChange={handlePreferenceChange} />;
      case 4:
        return <DropDown2 handleChange={handleDiscoveryChange} />;
      case 5:
        return <RangeSlider handleChange={handleRangeChange}/>;
      default:
        return null;
    }
  };

  // Event handlers for dropdown changes
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleMusicianChange = (event) => {
    setSelectedMusician(event.target.value);
  };

  const handlePreferenceChange = (event) => {
    setSelectedMusicPreference(event.target.value);
  };

  const handleDiscoveryChange = (event) => {
    setSelectedDiscovery(event.target.value);
  };

  const handleRangeChange = (event) => {
    setSelectedRange(event.target.value);
  };

  return (
    <div className="survey-form">
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="buttonContainer">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="button">
              Back
            </button>
          )}

          {step < 5 && (
            <button type="button" onClick={nextStep} className="button">
              Next Question
            </button>
          )}

          {step === 5 && (
            <button type="submit" className="button">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
