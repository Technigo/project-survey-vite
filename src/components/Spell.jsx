export const Spell = ({ spellName, onChange }) => {
  return (
    <div className="text-input">
      <label htmlFor="spells">
        <h2>3.</h2>
        <p>What is your favorite spell?</p>
      </label>
      <input
        placeholder="Favorite spell"
        name="spell"
        type="text"
        onChange={onChange}
        value={spellName}
        id="spells"
        required
      ></input>
    </div>
  );
};
