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

  // Define a function to get the appropriate message based on the selected age span
  const getAgeMessage = (ageSpan) => {
    switch (ageSpan) {
      case "Under 18":
        return "  You're still a baby reindeer!";
      case "18 - 24":
        return "  Time to start working in Santas workshop!";
      case "25 - 34":
        return "  Time to have your own toy department!";
      case "35 - 44":
        return " - You are living your best life!";
      case "45 - 54":
        return " Still younger than Santa!";
      case "55 - 64":
        return " You are in your North pole prime!";
      case "65 or over":
        return " You're almost as old as Santa!";
      default:
        return "";
    }
  };

  // Handle changes when a user selects an age span
  const handleAgeChange = (event) => {
    const selectedAgeSpan = event.target.value;
    setSelectedAge(selectedAgeSpan); // Update the selectedAge in the parent component
    setAgeSelected(true); // Set ageSelected to true when an age is selected
  };

  return (
    <div className="ageClass">
      <h2>Age</h2>
      <label htmlFor="ageSelect">
        Please pick an age-span<br></br>
      </label>
      <select
        id="ageSelect"
        name="ageSelect"
        value={selectedAge}
        onChange={handleAgeChange}
      >
        <option value="">Age-span</option>
        {ageSpans.map((ageSpan) => (
          <option key={ageSpan} value={ageSpan}>
            {ageSpan}
          </option>
        ))}
      </select>
      {ageSelected && (
        <p>You selected: {selectedAge} - {getAgeMessage(selectedAge)}</p>
      )}
    </div>
  );
}

export default AgeQuestion;

