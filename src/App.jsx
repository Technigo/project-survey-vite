import { useState } from "react";

export const App = () => {
  const [animal, setAnimal] = useState("");
  const [planet, setPlanet] = useState("");
  const [color, setColor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  // Function to capitalize first letter of planet name
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const colors = [
    { value: "red", label: "red" },
    { value: "green", label: "green" },
    { value: "blue", label: "blue" },
    { value: "yellow", label: "yellow" },
    { value: "pink", label: "pink" },
    { value: "purple", label: "purple" },
    { value: "black", label: "black" },
    { value: "white", label: "white" },
  ];

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const planets = [
    { value: "", label: "Choose planet:" },
    { value: "mercury", label: "Mercury" },
    { value: "venus", label: "Venus" },
    { value: "earth", label: "Earth" },
    { value: "mars", label: "Mars" },
    { value: "jupiter", label: "Jupiter" },
    { value: "saturn", label: "Saturn" },
    { value: "uranus", label: "Uranus" },
    { value: "neptune", label: "Neptune" },
    { value: "pluto", label: "Pluto" },
  ];

  const handlePlanetChange = (event) => {
    setPlanet(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    // You can add additional logic here if needed
    setSubmitted(true);
  };

  return (
    <div className="App">
      <header></header>
      <form onSubmit={handleSubmit}>
        {/* Input text field */}
        <label>
          What is your dream pet?
          <input type="text" onChange={handleAnimalChange} value={animal} />
        </label>

        {/* Dropdown */}
        <label>
          What is your favourite planet?
          <select onChange={handlePlanetChange} value={planet}>
            {planets.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        {/* Radio buttons */}
        <p>What is your favourite color? </p>
        {colors.map(({ value, label }) => (
          <label key={value}>
            {label}
            <input
              type="radio"
              value={value}
              onChange={handleColorChange}
              checked={color === value}
            />
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <>
          <p>Your dream animal is: {animal}</p>
          <p>Your favourite planet is: {capitalizeFirstLetter(planet)}</p>
        </>
      )}
    </div>
  );
};
