import { useState } from "react";

export const Level = (props) => {
  const [level, setLevel] = useState("Beginner");

  const handleLevel = (event) => {
    setLevel(event.target.value);
    props.onChange(event.target.value);
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
  );
};

