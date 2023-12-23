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

  const getArticle = (gender) => {
    if (gender === "Santa Claus" || gender === "Mrs. Claus") {
      return ""; // No article for Santa Claus or Mrs. Claus
    }
    const vowels = ["a", "e", "i", "o", "u"];
    const firstLetter = gender.charAt(0).toLowerCase();
    return vowels.includes(firstLetter) ? "an" : "a";
  };

  const article = getArticle(selectedGender);

  return (
    <div id="survey">
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

