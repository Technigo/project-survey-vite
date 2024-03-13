import React, { useState } from "react";

// creates a companions array with name and description
const companionsArray = [
  {
    name: "Puddle the Pudding Pixie",
    description:
      "A tiny pixie who lives in a jar of pudding on the bedside table. Loves to make bedtime snacks extra special by adding a sprinkle of magic.",
  },
  {
    name: "Buzzy the Bumblebee",
    description:
      "A chubby, friendly bumblebee with wings that flutter softly as it buzzes around the room. A great storyteller and adds a touch of magic to bedtime.",
  },
  {
    name: "Sage the Talking Squirrel",
    description:
      "A wise and witty squirrel who lives in the old oak tree just outside the bedroom window. Loves to share stories of far-off lands and fantastical adventures.",
  },
  {
    name: "Twinkle the Tooth Fairy",
    description:
      "A magical and graceful fairy who visits children's bedrooms at night to collect their lost teeth. Leaves behind a sprinkle of fairy dust and a shiny coin in exchange for each tooth.",
  },
];

// creates an adventures array with name and description
const adventuresArray = [
  {
    name: "Magical Treasure Hunt",
    description:
      "Embark on a magical journey through the enchanted forest in search of hidden treasures left behind by mystical creatures. Follow whimsical clues and let your imagination soar.",
  },
  {
    name: "Bedtime Concert",
    description:
      "Set up a cozy stage area and showcase your talents in a magical bedtime concert. Sing enchanting melodies, tell jokes, and perform dazzling feats of magic before drifting off to sleep.",
  },
  {
    name: "Dreamy Drawings",
    description:
      "Engage in a creative art project using various art supplies to express yourself and explore your imagination. Let your artwork transport you to a world of wonder and whimsy.",
  },
  {
    name: "Stargazing",
    description:
      "Set up a cozy spot by the window or outdoors and observe the wonders of the night sky. Gaze at the stars, identify constellations, and share stories of the cosmos as you drift off into dreams.",
  },
];

function Questions() {
  const [activity, setActivity] = useState("");
  const [music, setHappy] = useState("");
  const [companion, setCompanion] = useState("");
  const [adventure, setAdventure] = useState("");

  const [submitted, setSubmitted] = useState(false);

  function handleActivityChange(event) {
    setActivity(event.target.value);
  }

  const toggleMusicHappy = (value) => {
    setHappy(value);
  };

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
      activity !== "" &&
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
            <p className="question">What is your mood-boosting activity?</p>
            <textarea
              value={activity}
              onChange={handleActivityChange}
              className="activity"
            />
          </div>
          <div className="SecondQuestion">
            <h2 className="number">2.</h2>
            <p className="question">Does music make you happy?</p>
            <div className="RadioButtons">
              <input
                type="radio"
                name="music"
                value="Yes"
                onClick={() => toggleMusicHappy("Yes")}
                className="yes-radio"
              />
              <label>Yes, absolutely</label>
              <input
                type="radio"
                name="music"
                value="No"
                onClick={() => toggleMusicHappy("No")}
                className="no-radio"
              />
              <label>No, I like the silence</label>
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
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2>Thank you for answering! Here's your whimsical bedtime story</h2>
          <p>{activity}</p>
          <p>{music}</p>
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
