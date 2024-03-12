import { useState } from "react";
import { Header } from "./components/Header";

export const App = () => {
  const [selectedOption, setSelectedOption] = useState("hiking");
  const [level, setLevel] = useState("Beginner");
  const [requirements, setRequirements] = useState("");
  const [email, setEmail] = useState("");
  const [hidden, setHidden] = useState("off");

  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleLevel = (event) => {
    setLevel(event.target.value);
  };

  const handleRequirements = (event) => {
    setRequirements(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleHidden = () => {
    setHidden((status) => (status === "on" ? "off" : "on"));
  };

  const submitForm = () => {
    handleHidden();
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} id="survey-form" className={`${hidden}`}>
        <fieldset>
          <legend>What type of activity are you interested in?</legend>
          <label htmlFor="activities-dropdown">Choose an activity: </label>
          <select
            name="activities-dropdown"
            id="activities-dropdown"
            onChange={handleSelectOption}
          >
            <option value="hiking">Hiking</option>
            <option value="skiing">Skiing</option>
            <option value="canoeing">Canoeing</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>What is your current level?</legend>
          <input
            type="radio"
            id="beginner"
            value="Beginner"
            name="level"
            checked={level === "Beginner"}
            onChange={handleLevel}
          />
          <label htmlFor="beginner">Beginner</label>
          <input
            type="radio"
            id="intermediate"
            value="Intermediate"
            name="level"
            checked={level === "Intermediate"}
            onChange={handleLevel}
          />
          <label htmlFor="intermediate">Intermediate</label>
          <input
            type="radio"
            id="advanced"
            value="Advanced"
            name="level"
            checked={level === "Advanced"}
            onChange={handleLevel}
          />
          <label htmlFor="advanced">Advanced</label>
        </fieldset>
        <fieldset>
          <legend>
            Do you have any specific requirements, such as dietary restrictions,
            medical needs, or mobility assistance?
          </legend>
          <input
            type="text"
            value={requirements}
            onChange={handleRequirements}
          />
        </fieldset>
        <fieldset>
          <legend>
            Finally, please enter your email address so that we may get in
            contact with you
          </legend>
          <input type="email" value={email} onChange={handleEmail} />
        </fieldset>

        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
      <div id="replies" className={hidden === "off" ? "on" : "off"}>
        <p>Selected activity {selectedOption}</p>
        <p>Selected level: {level}</p>
        <p>Special requirements: {requirements}</p>
        <p>Contact email: {email}</p>
      </div>
    </div>
  );
};
