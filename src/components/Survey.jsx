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
    setHours(false);
  };

  return (
    <>
    {showSummary ? (
        
        <div>
          <p>Your prefered type of exercise is: {workout}</p>
          <p>The amount of hours you exercise per week is: {hours} h</p>
          <p>
            The music genre you like listening to whilst exercising is: {music}{" "}
            music{" "}
          </p>
          <p> Thank you for participating!🎉</p>
          <button onClick={clearSurvey}>Return</button>
        </div>
      ) : (
        <div className = "form-box">
        <form onSubmit={handleSubmit}>
          <p>1.</p>
          <div ClassName="survey-container">
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
          /></div>

          <p>2.</p>
          <p>How many hours/week do you spend exercising?</p>
          {hourGroups.map((group) => (
            <label for="textinput" class="label" id="textworkoutinput" key={group}>
              <input
                type="radio"
                value={group}
                onChange={(event) => setHours(event.target.value)}
                checked={hours === group}
              />{" "}
              {group} Hours
            </label>
          ))}

          <p>3.</p>
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

          <button type="submit">Submit</button>
        </form></div>
      )}
    </>
  );
};
