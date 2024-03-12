import { useState } from "react";

export const Name = () => {
  const [name, setName] = useState("");
  return (
    <div className="questions">
      <label className="labelQ">
        <p className="counter">1.</p>
        What is your name?<br></br>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </label>
    </div>
  );
};
