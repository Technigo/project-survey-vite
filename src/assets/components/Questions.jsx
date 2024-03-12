import React, { useState } from "react";

function Questions() {
  const [activity, setActivity] = useState("");
  const [music, setHappy] = useState("");
  const [songs, setSelectSong] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleActivityChange(event) {
    setActivity(event.target.value);
  }

  const toggleMusicHappy = (value) => {
    setHappy(value);
  };

  function selectHappySongs(event) {
    setSelectSong(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (activity !== "" && music !== "" && songs !== "") {
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
            <textarea value={activity} onChange={handleActivityChange} className="activity"/>
          </div>
          <div className="SecondQuestion">
            <h2 className="number">2.</h2>
            <p className="question">Does music make you happy?</p>
            <input
              type="radio"
              name="music"
              value="Yes"
              onClick={() => toggleMusicHappy("Yes")}
            />
            Yes, absolutely
            <input
              type="radio"
              name="music"
              value="No"
              onClick={() => toggleMusicHappy("No")}
            />
            No, I like the silence
          </div>

          <div className="ThirdQuestion">
            <h2 className="number">3.</h2>
            <p className="question">What is your go-to happy song?</p>
            <select value={songs} onChange={selectHappySongs}>
              <option value="">Select songs</option>
              <option>Ariana Grande - yea, and?</option>
              <option>SZA - Saturn</option>
              <option>Dua Lipa - Training Session</option>
              <option>Taylor Swift - Cruel Summer</option>
            </select>
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div>
          <h2>Thank you for answering!</h2>
          <p>{activity} is your mood-boosting activity</p>
          <p>{music} is making you happy,</p>
          <p>and if ever you're down - listen to {songs}</p>
        </div>
      )}
    </div>
  );
}

export default Questions;
