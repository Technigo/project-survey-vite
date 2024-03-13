// import { useState } from "react";

// export const App = () => {
//   const [animal, setAnimal] = useState("");
//   const [planet, setPlanet] = useState("");
//   const [color, setColor] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleAnimalChange = (event) => {
//     setAnimal(event.target.value);
//   };

//   // Function to capitalize first letter of planet name
//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const colors = [
//     { value: "red", label: "red" },
//     { value: "green", label: "green" },
//     { value: "blue", label: "blue" },
//     { value: "yellow", label: "yellow" },
//     { value: "pink", label: "pink" },
//     { value: "purple", label: "purple" },
//     { value: "black", label: "black" },
//     { value: "white", label: "white" },
//   ];

//   const handleColorChange = (event) => {
//     setColor(event.target.value);
//   };

//   const planets = [
//     { value: "", label: "Choose planet:" },
//     { value: "mercury", label: "Mercury" },
//     { value: "venus", label: "Venus" },
//     { value: "earth", label: "Earth" },
//     { value: "mars", label: "Mars" },
//     { value: "jupiter", label: "Jupiter" },
//     { value: "saturn", label: "Saturn" },
//     { value: "uranus", label: "Uranus" },
//     { value: "neptune", label: "Neptune" },
//     { value: "pluto", label: "Pluto" },
//   ];

//   const handlePlanetChange = (event) => {
//     setPlanet(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevents default form submission behavior
//     // You can add additional logic here if needed
//     setSubmitted(true);
//   };

//   return (
//     <div className="App">
//       <header></header>
//       {!submitted && ( // Render the form only if not submitted
//       <form onSubmit={handleSubmit}>
//         {/* Input text field */}
//         <label>
//           What is your dream pet?
//           <input type="text" onChange={handleAnimalChange} value={animal} />
//         </label>

//         {/* Dropdown */}
//         <label>
//           What is your favourite planet?
//           <select onChange={handlePlanetChange} value={planet}>
//             {planets.map(({ value, label }) => (
//               <option key={value} value={value}>
//                 {label}
//               </option>
//             ))}
//           </select>
//         </label>
//         {/* Radio buttons */}
//         <p>What is your favourite color? </p>
//         {colors.map(({ value, label }) => (
//           <label key={value}>
//             {label}
//             <input
//               type="radio"
//               value={value}
//               onChange={handleColorChange}
//               checked={color === value}
//             />
//           </label>
//         ))}
//         <button type="submit">Submit</button>
//         )}
//       {submitted && (
//         <> {/* Fragments are used here */}
//           <p>Your dream animal is: {animal}</p>
//           <p>Your favourite planet is: {capitalizeFirstLetter(planet)}</p>
//         </>
//       )}
//     </div>
//     </form>
//   )};
// );

import { useState } from "react";

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

  return (
    <div className="App">
      <header></header>

      {!submitted && ( // Render the form only if not submitted
        <form onSubmit={handleSubmit}>
          <label>
            What is your dream pet?
            <input
              type="text"
              onChange={handleAnimalChange}
              value={animal}
              required
            />
          </label>
          <label>
            What is your favourite planet?
            <select onChange={handlePlanetChange} value={planet} required>
              {planets.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>
          <p>What is your favourite color? </p>
          {colors.map(({ value, label, name }) => (
            <label key={value}>
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
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
      {submitted && (
        <>
          {" "}
          {/* Text to show when submitted */}
          <p>
            Once upon a time, there was an alien - you. You were colored {color}{" "}
            and lived on {capitalizeFirstLetter(planet)}. Your best friend was a
            cute {animal.toLowerCase()} named Sparkle. Together, you zoomed
            through space, exploring new worlds and making friends wherever you
            went. And you lived happily ever after, spreading joy across the
            galaxy. The end!
          </p>
        </>
      )}
    </div>
  );
};
