import React, { useState, useCallback, useMemo } from "react";
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

  const handleSubmit = useCallback(
    (event) => {
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
    },
    [charactername, location, companion, adventure]
  );

  const makeAnotherStory = useCallback(() => {
    setCharactername("");
    setLocation("");
    setCompanion("");
    setAdventure("");
    setSubmitted(false);
  }, []);

  const companionsDescriptionMap = useMemo(() => {
    return companionsArray.reduce((acc, companion) => {
      acc[companion.name] = companion.description;
      return acc;
    }, {});
  }, []);

  const adventuresDescriptionMap = useMemo(() => {
    return adventuresArray.reduce((acc, adventure) => {
      acc[adventure.name] = adventure.description;
      return acc;
    }, {});
  }, []);

  return (
    <div className="formContainer">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="QuestionForm">
          <Charactername
            value={charactername}
            onChange={setCharactername}
            tabIndex="1"
          />
          <Location value={location} onChange={setLocation} tabIndex="2" />
          <Companion
            value={companion}
            onChange={setCompanion}
            tabIndex="3"
            companionsDescriptionMap={companionsDescriptionMap}
          />
          <Adventure
            value={adventure}
            onChange={setAdventure}
            tabIndex="4"
            adventuresDescriptionMap={adventuresDescriptionMap}
          />
          <SubmitButton tabIndex="5" />
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
                You will meet {companion}, {companionsDescriptionMap[companion]}
              </p>
            )}
            <br />
            {adventure && (
              <p>
                The two of you do a {adventure}.{" "}
                {adventuresDescriptionMap[adventure]}
              </p>
            )}
          </div>
          <button
            className="submitButton"
            onClick={makeAnotherStory}
            tabIndex="6"
          >
            Make another story
          </button>
        </div>
      )}
    </div>
  );
}

