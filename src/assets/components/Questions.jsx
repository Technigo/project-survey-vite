import { useState } from "react";
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
    console.log("Form submitted");

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
          <Charactername value={charactername} onChange={setCharactername} />
          <Location value={location} onChange={setLocation} />
          <Companion value={companion} onChange={setCompanion} />
          <Adventure value={adventure} onChange={setAdventure} />
          <SubmitButton onClick={() => setSubmitted(true)} />
        </form>
      ) : (
        <div>
          <h2>Thank you for answering! Here`s your whimsical bedtime story</h2>
          <p>
            Your name is {charactername}, and you are tasked with an important
            mission and about to start your adventure!
          </p>
          <p>You are excited to leave {location} and make some new friends!</p>
          {companion && (
            <p>
              You will meet {companion},{" "}
              {
                companionsArray.find(
                  (companionElement) => companionElement.name === companion
                )?.description
              }
            </p>
          )}
          {adventure && (
            <p>
              You do a {adventure} and{" "}
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
