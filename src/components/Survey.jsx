import "./Survey.css";
import { useState } from "react"

export const Survey = () => {
  const [workout, setWorkout] = useState("");
  const [hours, setHours] = useState("");
  const [music, setMusic] = useState("");
  const hourGroups = ["1-2", "3-4", "4+"];
  const [showSummary, setShowSummary] = useState(false);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
     }
   
     const clearSurvey = () => {
      setWorkout ("")
      setHours ("")
      setMusic ("")
      setHours(false) 
     }

  return ( 
    <>
    {showSummary ? 
    <div>
    <p>Your prefered type of exercise is: {workout}</p>
    <p>The amount of hours you exercise per week is: {hours} h</p>
    <p>The music genre you like listening to whilst exercising is: {music} music </p>
    <h2> Thank you for participating!🎉</h2>
    <button onClick={clearSurvey}>Return</button>
  </div> :

     <form onSubmit={handleSubmit}>
          
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
            </select></div>
          

          <button type="submit">Submit</button>
        </form>}
        </>
  );
};
