import React, { useState } from "react";

export function Charactername() {
  const [charactername, setCharactername] = useState("");

  function characterName(event) {
    setCharactername(event.target.value);
  }

  return (
    <div className="NameComponent">
      <h2 className="number">1.</h2>
      <p className="question">What is your character's name?</p>
      <textarea
        value={charactername}
        onChange={characterName}
        className="Charactername"
      />
    </div>
  );
}
