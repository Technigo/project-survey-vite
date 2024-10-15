import React, { useState } from 'react';
import { Question1 } from "./Question1"
import { Question2 } from "./Question2"
import { Question3 } from "./Question3"


export const Survey = () => {
  const [activity, setActivity] = useState('');
  const [musicYesNo, setMusicYesNo] = useState();
  const [happySong, setHappySong] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Question1 activity={activity} setActivity={setActivity} />
        <Question2 musicYesNo={musicYesNo} setMusicYesNo={setMusicYesNo} />
        <Question3 happySong={happySong} setHappySong={setHappySong} />

        <br></br> <br></br> <br></br> <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};