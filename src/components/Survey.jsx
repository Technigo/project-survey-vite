import "./Survey.css";
import { useState } from "react";

export const Survey = () => {
  const [workout, setWorkout] = useState("");
  const [hours, setHours] = useState("");
  const [music, setMusic] = useState("");
  const hourGroups = ["1-2", "3-4", "4+"];
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  const clearSurvey = () => {
    setWorkout("");
    setHours("");
    setMusic("");
    setHours("");
    setShowSummary(false);
  };

  return (
    <>
      {showSummary ? (
        <div className="summary-container">
          <p>
            Your prefered type of exercise is: <strong>{workout}</strong>{" "}
          </p>
          <p>
            The amount of hours you exercise per week is:{" "}
            <strong>{hours} h</strong>{" "}
          </p>
          <p>
            The music genre you like listening to whilst exercising is:{" "}
            <strong>{music} music</strong>{" "}
          </p>
          <p id="result-text"> Thank you for participating!🎉</p>
          <button onClick={clearSurvey}>Return</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p className="numbers">1.</p>
          <div className="survey-container">
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
          </div>

          <p className="numbers">2.</p>
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

          <p className="numbers">3.</p>
          <p>What music do you like listening to when exercising?</p>
          <div className="dropdown">
            <select
              aria-label="State"
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

          <button type="submit">Submit your answer</button>
        </form>
      )}
    </>
  );
};
