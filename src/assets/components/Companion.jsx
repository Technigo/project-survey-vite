import React, { useState } from "react";
import { companionsArray } from "./Arrays.jsx";

export function Companion() {

  const [companion, setCompanion] = useState("");

  function selectCompanion(event) {
    setCompanion(event.target.value);
  }

  return (
    <div className="CompanionComponent">
      <h2 className="number">3.</h2>
      <p className="question">Who is your main character's companion?</p>
      <select value={companion} onChange={selectCompanion}>
        <option value="">Select companion</option>
        {companionsArray.map((companion, index) => (
          <option key={index} value={companion.name}>
            {companion.name}
          </option>
        ))}
      </select>
    </div>
  );
}
