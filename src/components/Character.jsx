export const Character = ({ characterName, onChange }) => {
  return (
    <div className="dropdown">
      <label htmlFor="characters">
        <h2>2.</h2>
        <p>Who is your favorite character?</p>
      </label>
      <select
        className="select-box"
        name="character"
        value={characterName}
        onChange={onChange}
        id="characters"
        required
      >
        <option className="option" disabled value="">
          Choose character
        </option>
        <option className="option" value="Harry Potter">
          Harry Potter
        </option>
        <option className="option" value="Hermione Granger">
          Hermione Granger
        </option>
        <option className="option" value="Ron Weasley">
          Ron Weasley
        </option>
        <option className="option" value="Lord Voldemort">
          Lord Voldemort
        </option>
        <option className="option" value="Severus Snape">
          Severus Snape
        </option>
        <option className="option" value="Albus Dumbledore">
          Albus Dumbledore
        </option>
        <option className="option" value="Rubeus Hagrid">
          Rubeus Hagrid
        </option>
        <option className="option" value="Minerva McGonagall">
          Minerva McGonagall
        </option>
      </select>
    </div>
  );
};
