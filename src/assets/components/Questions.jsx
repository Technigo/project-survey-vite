import React, { useState } from "react";
import { companionsArray, adventuresArray } from "./Arrays.jsx";

export function Questions() {
  const [charactername, setCharactername] = useState("");
  const [location, setLocation] = useState("");
  const [companion, setCompanion] = useState("");
  const [adventure, setAdventure] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function characterName(event) {
    setCharactername(event.target.value);
  }

  const chooseLocation = (value) => {
    setLocation(value);
  };

  function selectCompanion(event) {
    setCompanion(event.target.value);
  }

  function selectAdventure(event) {
    setAdventure(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      charactername !== "" &&
      location !== "" &&
      companion !== "" &&
      adventure !== ""
    ) {
      setSubmitted(true);
    } else {
      alert("Please answer all questions.");
    }
  }

  function makeAnotherStory() {
    setCharactername("");
    setLocation("");
    setCompanion("");
    setAdventure("");
    setSubmitted(false);
  }

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="QuestionForm">
          <div className="FirstQuestion">
            <h2 className="number">1.</h2>
            <p className="question">What is your character's name?</p>
            <textarea
              value={charactername}
              onChange={characterName}
              className="Charactername"
            />
          </div>
          <div className="SecondQuestion">
            <h2 className="number">2.</h2>
            <p className="question">
              Choose where you want to start your story?
            </p>
            <div className="RadioButtons">
              <input
                type="radio"
                name="location"
                value="Forest"
                onClick={() => chooseLocation("Forest")}
                className="radio"
              />
              <label>Forest</label>
              <input
                type="radio"
                name="location"
                value="A far far away kingdom"
                onClick={() => chooseLocation("A far far away kingdom")}
                className="radio"
              />
              <label>A far far away kingdom</label>
              <input
                type="radio"
                name="location"
                value="School of Witchcraft and Wizardry"
                onClick={() =>
                  chooseLocation("School of Witchcraft and Wizardry")
                }
                className="radio"
              />
              <label>School of Witchcraft and Wizardry</label>
            </div>
          </div>

          <div className="ThirdQuestion">
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

          <div className="FourthQuestion">
            <h2 className="number">4.</h2>
            <p className="question">What's the pair's favourite adventure?</p>
            <select value={adventure} onChange={selectAdventure}>
              <option value="">Select adventure</option>
              {adventuresArray.map((adventure, index) => (
                <option key={index} value={adventure.name}>
                  {adventure.name}
                </option>
              ))}
            </select>
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div>
          <h2>Thank you for answering! Here's your whimsical bedtime story</h2>
          <p>
            Your name is {charactername}, and you are tasked with an important
            mission and about start your adventure!
          </p>
          <p>You are excited to leave {location} and make some new friends!</p>
          {companion && (
            <p>
              You will choose{" "}
              {
                companionsArray.find(
                  (companionElement) => companionElement.name === companion
                )?.description
              }
            </p>
          )}
          {adventure && (
            <p>
              {
                adventuresArray.find(
                  (adventureElement) => adventureElement.name === adventure
                )?.description
              }
            </p>
          )}
          <button onClick={makeAnotherStory}>Make another story</button>
        </div>
      )}
    </div>
  );
}
