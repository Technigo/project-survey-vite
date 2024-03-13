import { useState } from "react";

export const App = () => {
  const [animal, setAnimal] = useState("");
  const [planet, setPlanet] = useState("");

  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  const handlePlanetChange = (event) => {
    setPlanet(event.target.value);
  };
  //Function to capitalize first letter of planet name
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    // You can add additional logic here if needed
  };

  return (
    <div className="App">
      <header></header>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          What is your dream pet?
          <input type="text" onChange={handleAnimalChange} value={animal} />
        </label>
        <label>
          What is your favourite planet?
          <select onChange={handlePlanetChange} value={planet}>
            <option value=""> Choose planet: </option>
            <option value="mercury">Mercury</option>
            <option value="venus">Venus</option>
            <option value="tellus">Tellus</option>
            <option value="mars">Mars</option>
            <option value="jupiter">Jupiter</option>
            <option value="saturn">Saturn</option>
            <option value="uranus">Uranus</option>
            <option value="neptune">Neptune</option>
            <option value="pluto">Pluto</option>
          </select>
        </label>
      </form>
      <p>Your dream animal is: {animal}</p>
      <p>Your favourite planet is: {capitalizeFirstLetter(planet)}</p>
    </div>
  );
};
