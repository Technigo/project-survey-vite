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
    <div className="formContainer">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="QuestionForm">
          <Charactername value={charactername} onChange={setCharactername} />
          <Location value={location} onChange={setLocation} />
          <Companion value={companion} onChange={setCompanion} />
          <Adventure value={adventure} onChange={setAdventure} />
          <SubmitButton />
        </form>
      ) : (
        <div className="outputContainer">
          <h2>Here&#39;s your whimsical bedtime story!</h2>
          <div className="storyContainer">
            <p>
              This is the story of {charactername} who is about to meet new
              friends and start a magical adventure! You are excited to leave{" "}
              {location} and make some new friends!
            </p>{" "}
            <br />
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
            <br />
            {adventure && (
              <p>
                The two of you do a {adventure}.{" "}
                {
                  adventuresArray.find(
                    (adventureElement) => adventureElement.name === adventure
                  )?.description
                }
              </p>
            )}
          </div>
          <button className="submitButton" onClick={makeAnotherStory}>
            Make another story
          </button>
        </div>
      )}
    </div>
  );
}
