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

  // Determine the article ("a" or "an") based on the selectedGender
  const isVowelSound = ["Elf", "Other", "Reindeer"].includes(selectedGender);
  const article = isVowelSound ? "an" : "a";

  return (
    <div>
      <h2>Here's a quick review of your answers</h2>
      <p>
        You {celebrateChristmas === "No" ? "don't" : "do"} celebrate Christmas!
        You identify yourself to be {article} {selectedGender} between the ages {selectedAge}.
      </p>
      <p>
        You are excited about Christmas at a level of {excitementLevel} out of
        100.
      </p>
      <p>
        The things you like most about Christmas are{" "}
        {" " + option.join(", ").toLowerCase()}.
      </p>
      <p>When it comes to Christmas gifts, you like {likedOption.toLowerCase()}.</p>
    </div>
  );
}

export default SurveySummary;
