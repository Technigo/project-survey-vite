import { useState } from "react";
import PropTypes from "prop-types";

export const Location = ({setLocation}) => {
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <div className="question location">
      <h3>3. Where do you usually eat pizza?</h3>
      <div className="dropdown">
        <select
          value={selectedLocation}
          onChange={(event) => {
            setSelectedLocation(event.target.value)
            setLocation(event.target.value)
          }}
      >
        <option value="" disabled hidden>
          -- Please choose region --
        </option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Oceania">Oceania</option>
      </select></div>
      <p><span>Your favorite pizza-eating-spot is:</span>{selectedLocation}</p>
    </div>
  );
};

Location.propTypes = {
  setLocation: PropTypes.string.isRequired,
};