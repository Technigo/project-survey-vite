// Frida

/*import { useState } from "react";

export const Intro = () => {
  const [name, setName] = useState(``);

  return (
    <div>
      <h1>Welcome to get your own ticket to Mars</h1>
      <h2>Lets get started</h2>

      <form>
        <p>Enter your name</p>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
      </form>
      <button onClick={name}>Next</button>
    </div>
  );
};*/

export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData("name", e.target.value);
  return (
    <div>
      <h1>Welcome to get your own ticket to Mars</h1>
      <h2>Lets get started with your name</h2>
      <label></label>
      <input type="text" value={value} onChange={userName} />
    </div>
  );
};
