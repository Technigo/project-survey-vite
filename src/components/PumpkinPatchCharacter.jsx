
const mysteryCharacters = ["The Pumpkin King", "The Queen of Crows", "The Spectral Scarecrow", "The Autumn Sprite", "The Ember Witch", "The Moonlit Minstrel"];

export const PumpkinPatchCharacter = ({ updateFormData, value }) => {

  // const [mysteryCharacter, setmysteryCharacter] = useState();
  const PumpkinPatchCharacterChoice = (event) => updateFormData("pumpkinPatchCharacter", event.target.value)

  return (
    <span>
      <form className="radio-form-wrapper pumpkin-patch-character-form">
        <p>Select a mysterious character to make an appearance in the story:</p>
        {mysteryCharacters.map((characterChoice) => (
          <label className="radio-button-label" key={characterChoice}>
            <input
              type="radio"
              class="radio-button"
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
