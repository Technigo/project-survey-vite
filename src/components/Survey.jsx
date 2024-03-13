import { useState } from "react";

export const Survey = () => {
  // const [houses, setHouses] = useState();
  // const [character, setCharacter] = useState("");
  // const [spell, setSpell] = useState("");
  
  const [results, setResults] = useState({
    house: "",
    character: "",
    spell: "",
  });
  const [submitted, setSubmitted] = useState(false)

  const houseGroup = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResults({
      ...results,
      [name]: value,
    });
    setSubmitted(true)
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(results);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* radio buttons */}
        <div className="radio-buttons">
          <label>Which Hogwarts house represents you the best?</label>

          {houseGroup.map((house) => (
            <label key={house}>
              <input
                name="house"
                type="radio"
                value={house}
                onChange={handleInputChange}
                // onChange={event => setHouses(event.target.value)}
                checked={results.house === house}
              />
              {house}
            </label>
          ))}
        </div>

        {/* dropdown selection */}
        <div className="dropdown">
          <label>Who is your favorite character?</label>
          <select
            name="character"
            value={results.character}
            onChange={handleInputChange}
            // onChange={event => setCharacter(event.target.value)}
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

        {/* text input */}
        <div className="text-input">
          <label> What is your favorite spell?</label>
          <input
            name="spell"
            type="text"
            onChange={handleInputChange}
            // onChange={event => setSpell(event.target.value)}
            value={results.spell}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div className="results">
          <h2>Here are your survey answers:</h2>
          <p>House: { results.house } </p>
          <p>Character: { results.character } </p>
          <p>Spell: { results.spell } </p>
        </div>
      )}
    </div>
  );
};
