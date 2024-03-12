import { useState } from "react";

export const Survey = () => {
  const [workout, setWorkout] = useState("");
  const [hours, setHours] = useState("");
  /*const [music, setMusic] = useState ("")*/
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
    </form>
  );
};
