import React from "react";

function SurveySummary({ surveyAnswers }) {
  const {
    celebrateChristmas,
    excitementLevel,
    selectedGender,
    selectedAge,
    option,
    likedOption,
  } = surveyAnswers;

  return (
    <div>
      <h2>Here's a quick review of your answers</h2>
      <p>
        You {celebrateChristmas === "No" && "don't"} celebrate Christmas! You
        are a {selectedGender} who is between the ages {selectedAge}.
      </p>
      <p>
        You are excited about Christmas at a level of {excitementLevel} out of
        100.
      </p>
      <p>
        The things you like most about christmas are
        {" " + option.join(", ").toLowerCase()}.
      </p>
      <p>
        When it comes to Christmas gifts, you like {likedOption.toLowerCase()}.
      </p>
    </div>
  );
}

export default SurveySummary;
