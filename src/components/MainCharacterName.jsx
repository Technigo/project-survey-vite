
export const MainCharacterName = ({ value, updateFormData }) => {

  // const [name, setName] = useState('');
  const mainCharacterName = (event) => updateFormData("name", event.target.value);
  return (
    <span>
      <form className="main-character-name-form">
        <h2 className="Intro-text">Whispers of Autumn</h2>
        <p>Choose a name for your adventurer:</p>
        <input
          aria-label="adventurer name input"
          type="text"
          required
          value={value}
          onChange={mainCharacterName}
        />
      </form>
    </span>
  )
}
