export const Summary = ({ houseName, characterName, spellName, clearForm }) => {
  return (
    <div className="results">
      <h3>Here are your results!</h3>
      <p>Your favorite character is {characterName}.</p>
      <p>Your favorite spell is {spellName}.</p>
      <p>You would like to be in house {houseName}!</p>
      <button className="clear-button" onClick={clearForm}>
        Again!
      </button>
    </div>
  );
};
