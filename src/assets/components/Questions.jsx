import React, { useState } from "react";
import { Charactername } from "./Charactername.jsx";
import { Location } from "./Location.jsx";
import { Companion } from "./Companion.jsx";
import { Adventure } from "./Adventure.jsx";
import { SubmitButton } from "./SubmitButton.jsx";
import { companionsArray, adventuresArray } from "./Arrays.jsx";

export function Questions() {
  const [submitted, setSubmitted] = useState(false);
  const [charactername, setCharactername] = useState("");
  const [location, setLocation] = useState("");
  const [companion, setCompanion] = useState("");
  const [adventure, setAdventure] = useState("");

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
          <Charactername setCharactername={setCharactername} />
          <Location setLocation={setLocation} />
          <Companion setCompanion={setCompanion} />
          <Adventure setAdventure={setAdventure} />
          <SubmitButton onClick={setSubmitted} />
        </form>
      ) : (
        <div>
          <h2>Thank you for answering! Here's your whimsical bedtime story</h2>
          <p>
            Your name is {charactername}, and you are tasked with an important
            mission and about to start your adventure!
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
