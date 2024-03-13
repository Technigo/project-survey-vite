import { useState } from "react";

export const Activity = (props) => {
  const [activity, setActivity] = useState("Hiking");

  const handleSelectActivity = (event) => {
    setActivity(event.target.value);
    props.onChange(event.target.value);
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
        <option value="hiking">Hiking</option>
        <option value="skiing">Skiing</option>
        <option value="canoeing">Canoeing</option>
      </select>
    </fieldset>
  );
};
