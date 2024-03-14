import { useState } from "react";

export const Activity = ({ formError, onChange }) => {
  const [activity, setActivity] = useState("");

  const handleSelectActivity = (event) => {
    setActivity(event.target.value);
    onChange(event.target.value);
  };

  return (
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
        onChange={handleSelectActivity}
      >
        <option name="select" value="">
          Choose an activity
        </option>
        <option name="hiking" value="hiking">
          Hiking
        </option>
        <option name="skiing" value="skiing">
          Skiing
        </option>
        <option name="canoeing" value="canoeing">
          Canoeing
        </option>
      </select>
      <p className="error-message">{formError}</p>
    </fieldset>
  );
};
