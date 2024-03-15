import { useState } from "react";

export const Summary = ({ value, mood, song }) => {

    console.log(mood);

if (mood === "Yes"){
  setAnswer("You love music, that's lovely")
}
else {
  setAnswer("You don't like music? They say silence is golden.")
}
setAnswer(mood === "Yes" ? "No" : "Yes")

console.log(mood)
  return (
    <div className="form-container">
        <div className="form-wrapper">
      <h2>Summary of The Science of Happiness</h2>
      <p>{value} is your mood-boosting activity. {mood} music is making you happy, and if ever you are down - listen to {song}</p>
      </div>
      </div>
  )
}
