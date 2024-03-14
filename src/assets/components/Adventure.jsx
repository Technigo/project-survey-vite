import React, { useState } from "react";
import { adventuresArray } from "./Arrays.jsx";

export function Adventure() {

  const [adventure, setAdventure] = useState("");

  function selectAdventure(event) {
    setAdventure(event.target.value);
    console.log("Selected Adventure:", event.target.value);
  }

  return (
    <div className="AdventureComponent">
      <h2 className="number">4.</h2>
      <p className="question">What's the pair's favourite adventure?</p>
      <select value={adventure} onChange={selectAdventure}>
        <option value="">Select adventure</option>
        {adventuresArray.map(
          (
            adventureItem,
            index 
          ) => (
            <option key={index} value={adventureItem.name}>
              {adventureItem.name}
            </option>
          )
        )}
      </select>
    </div>
  );
}
