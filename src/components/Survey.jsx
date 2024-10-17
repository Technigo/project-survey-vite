// src/components/Survey

import React, { useState } from 'react';
import { Question1 } from "./Question1"
import { Question2 } from "./Question2"
import { Question3 } from "./Question3"
import { Summary } from "./Summary"


export const Survey = ({ setIsSubmitted }) => {
  const [activity, setActivity] = useState('');
  const [musicYesNo, setMusicYesNo] = useState();
  const [happySong, setHappySong] = useState();
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
    setIsSubmitted(true);
  };

  return (
    <div className="survey-container">
      {!showSummary ? (
      <form onSubmit={handleSubmit}>
        <Question1 activity={activity} setActivity={setActivity} />
        <Question2 musicYesNo={musicYesNo} setMusicYesNo={setMusicYesNo} />
        <Question3 happySong={happySong} setHappySong={setHappySong} />
        <button type="submit">Submit your answer</button>
      </form>
      ) : (
        <Summary activity={activity} musicYesNo={musicYesNo} happySong={happySong} />
    )}
    </div>
  );
}; 