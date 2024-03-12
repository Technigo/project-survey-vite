import { useState } from "react";

export const Survey = () => {
  const [workout, setWorkout] = useState("");
  const [hours, setHours] = useState("");
  const [music, setMusic] = useState("")
  const hourGroups = ["1-2", "3-4", "4+"];


  return (
    <form>
      <h3>1.</h3>
      <p>
        What kind of exercise do you enjoy the most? (ex. running, swimming..)
      </p>
      <input
        type="text"
        onChange={(event) => setWorkout(event.target.value)}
        value={workout}
        // la till required då det ingår i designen att lägga till en varning om att man måste ange ett svar.
        required
        // la till placeholder då det också står i designen att inputfield ska innehålla en placehålder som nedan
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
      <p>What music do you listen to during workout</p>
      <select
        onChange={event => setMusic(event.target.value)}
        value={music}
      >
        <option value="">Select music</option>
        <option value="house">House</option>
        <option value="rock">Rock</option>
        <option value="pop">Pop</option>
        <option value="electronic">Electronic</option>
      </select>

    </form>
  );
};
