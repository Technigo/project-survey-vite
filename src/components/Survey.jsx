import { useState } from "react";

export const Survey = () => {
  const [houses, setHouses] = useState();
  const [character, setCharacter] = useState("");
  const [spell, setSpell] = useState("");

  const houseGroup = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

  return (
    <div className="form-container">
      <form>
        <div className="radio-buttons">
          <label>Which Hogwarts house represents you the best?</label>

          {houseGroup.map((house) => (
            <label key={house}>
              <input
                type="radio"
                value={house}
                onChange={(event) => setHouses(event.target.value)}
                checked={houses === house}
              />
              {house}
            </label>
          ))}
        </div>

        <div className="dropdown">
          <label>Who is your favorite character?</label>
          <select
            value={character}
            onChange={(event) => setCharacter(event.target.value)}
          >
            <option disabled value="">
              choose your favorite character:
            </option>
            <option value="Harry Potter">Harry Potter</option>
            <option value="Hermione Granger">Hermione Granger</option>
            <option value="Ron Weasley">Ron Weasley</option>
            <option value="Lord Voldemort">Lord Voldemort</option>
            <option value="Severus Snape">Severus Snape</option>
            <option value="Albus Dumbledore">Albus Dumbledore</option>
            <option value="Rubeus Hagrid">Rubeus Hagrid</option>
            <option value="Minerva McGonagall">Minerva McGonagall</option>
          </select>
        </div>

        <div className="text-input">
          <label> What is your favorite spell?</label>
          <input
            type="text"
            onChange={(event) => setSpell(event.target.value)}
            value={spell}
          ></input>
        </div>
      </form>
    </div>
  );
};
