import React, {useState} from "react";

function Questions(){

    const [activity, setActivity] = useState("");
    const [music, setHappy] = useState("");
    const [songs, setSelectSong] = useState("");



    function handleActivityChange(event){
        setActivity(event.target.value);
    }

    const toggleMusicHappy = (value) => {
        setHappy(value);
    }

    function selectHappySongs(event){
        setSelectSong(event.target.value);
    }

    return (
      <div>
        <h2>1.</h2>
        <p>What is your mood-boosting activity?</p>
        <textarea value={activity} onChange={handleActivityChange} />

        <h2>2.</h2>
        <p>Does music make you happy?</p>
        <button onClick={() => toggleMusicHappy("Yes")}>Yes, absolutely</button>
        <button onClick={() => toggleMusicHappy("No")}>
          No, I like the silence
        </button>

        <h2>3.</h2>
        <p>What is your go-to happy song?</p>
        <select value={songs} onChange={selectHappySongs}>
          <option value="">Select songs</option>
          <option>Ariana Grande - yea, and?</option>
          <option>SZA - Saturn</option>
          <option>Dua Lipa - Training Session</option>
          <option>Taylor Swift - Cruel Summer</option>
        </select>
      </div>
    );
}

export default Questions