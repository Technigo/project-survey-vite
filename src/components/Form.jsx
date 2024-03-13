import { useState } from "react";
import { Email } from "./Email";
import { Activity } from "./Activity";
import { Level } from "./Level";
import { Requirements } from "./Requirements";

export const Form = () => {
  const [selectedOption, setSelectedOption] = useState("Hiking");
  const [selectedLevel, setSelectedLevel] = useState("Beginner");
  const [requirements, setRequirements] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [hidden, setHidden] = useState("off");

  const handleLevelSelection = (level) => {
    setSelectedLevel(level);
  };

  const handleRequirements = (requirement) => {
    setRequirements(requirement);
  };

  const handleActivityChange = (activity) => {
    setSelectedOption(activity);
  };

  const handleEmailChange = (email) => {
    setEmailValue(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleHidden = () => {
    setHidden((status) => (status === "on" ? "" : "on"));
  };

  const submitForm = () => {
    handleHidden();
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        id="survey-form"
        className={`form-flex ${hidden}`}
      >
        <Activity onChange={handleActivityChange} />
        <Level onChange={handleLevelSelection} />
        <Requirements onChange={handleRequirements} />
        <Email onChange={handleEmailChange} />
        <button type="submit" onClick={submitForm}>
          Submit your answers
        </button>
      </form>
      <div id="replies" className={hidden === "off" ? "on" : ""}>
        <p>Contact email: {emailValue}</p>
        <p>Selected activity: {selectedOption}</p>
        <p>Selected level: {selectedLevel}</p>
        <p>Special requirements: {requirements}</p>
      </div>
    </div>
  );
};
//
