import React, { useState } from "react";

function AgeQuestion({ selectedAge, setSelectedAge }) {
  const [ageSelected, setAgeSelected] = useState(false); // Track if age is selected

  // Define an array of age spans as options for the dropdown
  const ageSpans = [
    "Under 18",
    "18 - 24",
    "25 - 34",
    "35 - 44",
    "45 - 54",
    "55 - 64",
    "65 or over",
  ];

  // Handle changes when a user selects an age span
  const handleAgeChange = (event) => {
    const selectedAgeSpan = event.target.value;
    setSelectedAge(selectedAgeSpan); // Update the selectedAge in the parent component
    setAgeSelected(true); // Set ageSelected to true when an age is selected
  };

  return (
    <div className="ageClass">
      <h2>Age</h2>
      <label htmlFor="ageSelect">Choose your age span:</label>
      <select
        id="ageSelect"
        name="ageSelect"
        value={selectedAge}
        onChange={handleAgeChange}
      >
        <option value="">Select an age span</option>
        {ageSpans.map((ageSpan) => (
          <option key={ageSpan} value={ageSpan}>
            {ageSpan}
          </option>
        ))}
      </select>
      {ageSelected && <p>You selected: {selectedAge}</p>}
    </div>
  );
}

export default AgeQuestion;
