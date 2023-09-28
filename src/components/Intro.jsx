// Frida

import { useState } from "react";

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
};
