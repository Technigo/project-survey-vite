import React, { useState } from "react";
import { companionsArray, adventuresArray } from "./Arrays.jsx";


function Questions() {
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

  //added function for adventures
  function selectAdventure(event) {
    setAdventure(event.target.value);
  function selectCompanion(event) {
    setCompanion(event.target.value);
  }

  //added function for adventures
  function selectAdventure(event) {
    setAdventure(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      charactername !== "" &&
      music !== "" &&
      companion !== "" &&
      adventure !== ""
    ) {
      setSubmitted(true);
    } else {
      alert("Please answer all questions.");
    }
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
                name="music"
                value="Forest"
                onClick={() => chooseLocation("Forest")}
                className="radio"
              />
              <label>Forest</label>
              <input
                type="radio"
                name="music"
                value="A far far away kingdom"
                onClick={() => chooseLocation("A far far away kingdom")}
                className="radio"
              />
              <label>A far far away kingdom</label>
              <input
                type="radio"
                name="music"
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
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2>Thank you for answering! Here's your whimsical bedtime story</h2>
          <p>Your name is {charactername}, and you are tasked with an important mission and about start your adventure!</p>
          <p>You are excited to leave {location} and make some new friends!</p>
          <p>
            {
              companionsArray.find(
                (companionElement) => companionElement.name === companion
              ).description
            }
          </p>
          <p>
            {
              adventuresArray.find(
                (adventureElement) => adventureElement.name === adventure
              ).description
            }
          </p>
        </div>
      )}
    </div>
  );
}

export default Questions;
