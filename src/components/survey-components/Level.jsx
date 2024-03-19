import { useState } from "react";
import PropTypes from "prop-types";

export const Level = ({ setDisplayLevel }) => {
  const [selectedLevel, setLevel] = useState();

  const levelSelect = (event) => {
    setLevel(event.target.value);
    setDisplayLevel(event.target.value);
  };

  return (
    <div className="question level">
      <h3>1. Select your pizza eating level:</h3>
        <div className="radio-option">
          <label>
            <input
              name="level"
              type="radio"
              value="Novice"
              checked={selectedLevel === "Novice"}
              onChange={levelSelect}
              required
            />
            Novice
          </label>
        </div>
        <div className="radio-option">
          <label>
            <input
              name="level"
              type="radio"
              value="Intermediate"
              checked={selectedLevel === "Intermediate"}
              onChange={levelSelect}
            />
            Intermediate
          </label>
        </div>
        <div className="radio-option">
          <label>
            <input
              name="level"
              type="radio"
              value="Expert"
              checked={selectedLevel === "Expert"}
              onChange={levelSelect}
            />
            Expert
          </label>
        </div>
        <div className="radio-option">
          <label>
            <input
              name="level"
              type="radio"
              value="Doctoral degree in Pizza eating"
              checked={selectedLevel === "Doctoral degree in Pizza eating"}
              onChange={levelSelect}
            />
            Doctoral degree in Pizza eating
          </label>
        </div>
        <div className="radio-option">
          <label>
            <input
              name="level"
              type="radio"
              value="Italian"
              checked={selectedLevel === "Italian"}
              onChange={levelSelect}
            />
            Italian
          </label>
        </div>
      <p>
        <span>You selected: {selectedLevel}</span>
      </p>
    </div>
  );
};
Level.propTypes = {
  setDisplayLevel: PropTypes.func,
};
