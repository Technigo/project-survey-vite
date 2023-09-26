import { useState } from "react"

const mysteryCharacters = ["the Pumpkin King", "the Queen of Crows", "the Spectral Scarecrow", "the Autumn Sprite", "the Ember Witch", "the Moonlit Minstrel"];

export const PumpkinPatchCharacter = () => {

  const [mysteryCharacter, setmysteryCharacter] = useState();

  return (
    <form>
      {mysteryCharacters.map((characterChoice) => (
        <label key={characterChoice}>
          <input
            type="radio"
            value={characterChoice}
            onChange={(event) => setmysteryCharacter(event.target.value)}
            checked={mysteryCharacter === characterChoice}
          />
        </label>
      ))}
    </form>
  );

}