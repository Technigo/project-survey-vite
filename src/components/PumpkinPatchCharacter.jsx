
const mysteryCharacters = ["the Pumpkin King", "the Queen of Crows", "the Spectral Scarecrow", "the Autumn Sprite", "the Ember Witch", "the Moonlit Minstrel"];

export const PumpkinPatchCharacter = ({ updateFormData, value }) => {

  // const [mysteryCharacter, setmysteryCharacter] = useState();
  const PumpkinPatchCharacterChoice = (event) => updateFormData("pumpkinPatchCharacter", event.target.value)

  return (
    <span>
      <form className="pumpkin-patch-character-form">
        {mysteryCharacters.map((characterChoice) => (
          <label key={characterChoice}>
            <input
              type="radio"
              value={characterChoice}
              onChange={PumpkinPatchCharacterChoice}
              checked={value === characterChoice}
            />
            {characterChoice} 
          </label>
        ))}
      </form>
    </span>
  );
}
