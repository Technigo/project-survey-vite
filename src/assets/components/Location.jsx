import React, { useState } from "react";

export function Location() {

  const [location, setLocation] = useState("");

  const chooseLocation = (value) => {
    setLocation(value);
  console.log("Location:", value); 
  };

  return (
    <div className="ChooseLocation">
      <h2 className="number">2.</h2>
      <p className="question">Choose where you want to start your story?</p>
      <div className="RadioButtons">
        <input
          type="radio"
          name="location" 
          value="Forest" 
          checked={location === "Forest"}
          onChange={() => chooseLocation("Forest")}
          className="radio"
        />
        <label>Forest</label>
        <input
          type="radio"
          name="location" 
          value="A far far away kingdom" 
          checked={location === "A far far away kingdom"}
          onChange={() => chooseLocation("A far far away kingdom")}
          className="radio"
        />
        <label>A far far away kingdom</label>
        <input
          type="radio"
          name="location" 
          value="School of Witchcraft and Wizardry" 
          checked={location === "School of Witchcraft and Wizardry"}
          onChange={() => chooseLocation("School of Witchcraft and Wizardry")}
          className="radio"
        />
        <label>School of Witchcraft and Wizardry</label>
      </div>
    </div>
  );
}
