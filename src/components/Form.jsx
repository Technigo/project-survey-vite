import { useState } from "react";
import { House } from "./House";
import { Character } from "./Character";
import { Spell } from "./Spell";
import { Summary } from "./Summary";
import { Submit } from "./Submit";

const houseGroup = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

export const Form = () => {
  const [results, setResults] = useState({
    house: "",
    character: "",
    spell: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResults({
      ...results,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const clearForm = () => {
    setResults("");
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <Summary
          houseName={results.house}
          characterName={results.character}
          spellName={results.spell}
          clearForm={clearForm}
        />
      ) : (
        <form onSubmit={handleSubmit}>
          {houseGroup.map((house, index) => (
            <House
              key={index}
              houseName={results.house}
              onChange={handleInputChange}
              house={house}
              index={index}
            />
          ))}
          <Character
            characterName={results.character}
            onChange={handleInputChange}
          />
          <Spell spellName={results.spell} onChange={handleInputChange} />
          <Submit />
        </form>
      )}
    </div>
  );
};
