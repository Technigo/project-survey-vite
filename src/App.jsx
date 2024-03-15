import { useState } from "react";
import spaceShipSvg from "./assets/space-ship.svg";

export const App = () => {
  const [animal, setAnimal] = useState("");
  const [planet, setPlanet] = useState("");
  const [color, setColor] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const colors = [
    { name: "colorButton", value: "red", label: "Red" },
    { name: "colorButton", value: "green", label: "Green" },
    { name: "colorButton", value: "blue", label: "Blue" },
    { name: "colorButton", value: "yellow", label: "Yellow" },
    { name: "colorButton", value: "pink", label: "Pink" },
    { name: "colorButton", value: "purple", label: "Purple" },
    { name: "colorButton", value: "black", label: "Black" },
    { name: "colorButton", value: "white", label: "White" },
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
    event.preventDefault();
    setSubmitted(true);
  };

  const handleStartOver = () => {
    setAnimal("");
    setPlanet("");
    setColor("");
    setSubmitted(false);
  };

  return (
    <div className="App">
      <header>
        {submitted ? (
          <>
            <h1>Here is your galaxy story</h1>
            <h2>Happy reading</h2>
          </>
        ) : (
          <>
            <h1>Once upon a time</h1>
            <h2>on a website far far away...</h2>
          </>
        )}
      </header>

      {!submitted && ( // Render the form only if not submitted
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="question-textfield">
            <p>1. </p>
            <label className="question-label">
              What is your dream pet?
              <input
                className="input-textfield"
                type="text"
                onChange={handleAnimalChange}
                value={animal}
                required
                placeholder="Type your answer here"
              />
            </label>
          </div>
          <div className="question-dropdown">
            <p>2. </p>
            <label className="question-label">
              What is your favourite planet?
              <select
                className="input-dropdown"
                onChange={handlePlanetChange}
                value={planet}
                required
              >
                {planets.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="question-radio-buttons">
            <p>3.</p>
            <label className="question-label">
              What is your favourite color?{" "}
            </label>
            {colors.map(({ value, label, name }) => (
              <div key={value}>
                <label className="input-radio-button">
                  {label}
                  <input
                    type="radio"
                    value={value}
                    onChange={handleColorChange}
                    checked={color === value}
                    name={name}
                    required
                  />
                </label>
              </div>
            ))}
          </div>
          <button className="submit-button" type="submit">
            Submit your answer
          </button>
        </form>
      )}
      {submitted && (
        <>
          {" "}
          <img src={spaceShipSvg} alt="space ship icon" />
          {/* Text to show when submitted */}
          <p className="summary-text">
            Once upon a time, there was an alien - you. You were colored {color}{" "}
            and lived on {capitalizeFirstLetter(planet)}. Your best friend was a
            cute {animal.toLowerCase()} named Sparkle. <br></br> <br></br>
            Together, you zoomed through space, exploring new worlds and making
            friends wherever you went. And you lived happily ever after,
            spreading joy across the galaxy. <br></br>
            <br></br>The end!
          </p>
          <button className="start-over-button" onClick={handleStartOver}>
            Start over
          </button>
        </>
      )}
    </div>
  );
};
