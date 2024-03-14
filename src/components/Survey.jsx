import { useState } from "react";
import "./Survey.css";

export const Survey = () => {
  const [workout, setWorkout] = useState("");
  const [hours, setHours] = useState("");
  const [music, setMusic] = useState("");
  const hourGroups = ["1-2", "3-4", "4+"];

  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
    setWorkout("");
    setHours("");
    setMusic("");
  };

  const Summary = () => (
    <div>
      <p>workout{workout}</p>
      <p>hours{hours}</p>
      <p>music{music}</p>
    </div>
  );

  return (
    <>
      {showSummary ? (
        <Summary />
      ) : (
        <form>
          <h3>1.</h3>
          <p>
            What kind of exercise do you enjoy the most? (ex. running,
            swimming..)
          </p>
          <input
            type="text"
            onChange={(event) => setWorkout(event.target.value)}
            value={workout}
            required
            placeholder="Write your answer here..."
          />
          <h3>2.</h3>
          <p>How many hours/week do you spend exercising?</p>
          {hourGroups.map((group) => (
            <label key={group}>
              <input
                type="radio"
                value={group}
                onChange={(event) => setHours(event.target.value)}
                checked={hours === group}
              />{" "}
              {group} Hours
            </label>
          ))}
          <h3>3.</h3>
          <p>What music do you like listening to when exercising?</p>
          <div className="dropdown">
            <select
              onChange={(event) => setMusic(event.target.value)}
              value={music}
            >
              <option value="">Select music</option>
              <option value="house">House</option>
              <option value="rock">Rock</option>
              <option value="pop">Pop</option>
              <option value="electronic">Electronic</option>
            </select>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};
