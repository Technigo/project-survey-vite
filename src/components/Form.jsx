import { useState } from "react";

export const Form = () => {
  const [selectedOption, setSelectedOption] = useState("Hiking");
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
        <fieldset>
          <legend>
            <h3>1.</h3>
            <p>What type of activity are you interested in?</p>
          </legend>
          <label htmlFor="activities-dropdown" className="visually-hidden">
            Choose an activity:{" "}
          </label>
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
        <fieldset className="radio-field">
          <legend>
            <h3>2.</h3>
            <p>What is your current level?</p>
          </legend>

          <label htmlFor="beginner">
            Beginner
            <input
              type="radio"
              className="radio"
              id="beginner"
              value="Beginner"
              name="level"
              checked={level === "Beginner"}
              tabIndex="0"
              onChange={handleLevel}
            />
          </label>

          <label htmlFor="intermediate">
            Intermediate
            <input
              type="radio"
              className="radio"
              id="intermediate"
              value="Intermediate"
              name="level"
              checked={level === "Intermediate"}
              tabIndex="0"
              onChange={handleLevel}
            />
          </label>

          <label htmlFor="advanced">
            Advanced
            <input
              type="radio"
              className="radio"
              id="advanced"
              value="Advanced"
              name="level"
              checked={level === "Advanced"}
              tabIndex="0"
              onChange={handleLevel}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>
            <h3>3.</h3>
            <p>
              Do you have any specific requirements, such as dietary
              restrictions, medical needs, or mobility assistance?
            </p>
          </legend>
          <input
            type="text"
            id="requirement-text"
            placeholder="Write your answer here"
            value={requirements}
            onChange={handleRequirements}
          />
        </fieldset>
        <fieldset>
          <legend>
            <h3>3.</h3>
            <p>
              Finally, please enter your email address so that we may get in
              contact with you
            </p>
          </legend>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={handleEmail}
          />
        </fieldset>

        <button type="submit" onClick={submitForm}>
          Submit your answers
        </button>
      </form>
      <div id="replies" className={hidden === "off" ? "on" : ""}>
        <p>Selected activity: {selectedOption}</p>
        <p>Selected level: {level}</p>
        <p>Special requirements: {requirements}</p>
        <p>Contact email: {email}</p>
      </div>
    </div>
  );
};
