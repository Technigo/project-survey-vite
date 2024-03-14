import { useState } from "react";

export const Level = ({ formError, onChange }) => {
  const [level, setLevel] = useState("");

  const handleLevel = (event) => {
    setLevel(event.target.value);
    onChange(event.target.value);
  };
  return (
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
          onChange={handleLevel}
        />
      </label>
      <p className="error-message">{formError}</p>
    </fieldset>
  );
};
