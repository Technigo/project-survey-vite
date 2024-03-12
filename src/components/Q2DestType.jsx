import { useState } from "react";

export const DestinationType = () => {
  const [destinationType, setDestinationType] = useState("");
  return (
    <div className="questions">
      <label className="labelQ">
        {" "}
        <p className="counter">2.</p>
        How should your destination look like?<br></br>
        <select
          onChange={(event) => setDestinationType(event.target.value)}
          value={destinationType}
        >
          <option value="" disabled>
            Select destination type
          </option>
          <option value="beach">Beach</option>
          <option value="mountain">Mountain</option>
          <option value="city">City</option>
          <option value="desert">Desert</option>
          <option value="lake">Lake</option>
          <option value="jungle">Jungle</option>
          <option value="underwater">Underwater</option>
          <option value="space">Space</option>
        </select>
      </label>
    </div>
  );
};
