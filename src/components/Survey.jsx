import { useState } from "react";

export const Survey = () => {
  // const [houses, setHouses] = useState();
  // const [character, setCharacter] = useState("");
  // const [spell, setSpell] = useState("");
  const [formData, setFormData] = useState({
    house: "",
    character: "",
    spell: "",
  });

  const houseGroup = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];


const handleInputChange = (event) => {
  const { name, value, type, checked} = event.target
  const newValue = type === "radio" ? checked : value

  setFormData ({
    ...formData,
    [name] : newValue
  })
}

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData)
}

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
                value={formData.house}
                // onChange={handleSubmit}
                onChange={handleInputChange}
                checked={house}
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
            value={formData.character}
            // onChange={handleSubmit}
            onChange={handleInputChange}
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
            // onChange={handleSubmit}
            onChange={handleInputChange}
            value={formData.spell}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
