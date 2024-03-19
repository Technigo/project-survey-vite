export const Level = ({ formError, onChange }) => {
  const handleLevel = (event) => {
    onChange(event.target.value);
  };
  return (
    <fieldset className="radio-field">
      <legend>
        <h3>2.</h3>
        <p>What is your current level?</p>
      </legend>

      <label htmlFor="beginner">
        <input
          type="radio"
          className="radio"
          id="beginner"
          value="Beginner"
          name="level"
          onChange={handleLevel}
        />
        <span>Beginner</span>
      </label>

      <label htmlFor="intermediate">
        <input
          type="radio"
          className="radio"
          id="intermediate"
          value="Intermediate"
          name="level"
          onChange={handleLevel}
        />
        <span>Intermediate</span>
      </label>

      <label htmlFor="advanced">
        <input
          type="radio"
          className="radio"
          id="advanced"
          value="Advanced"
          name="level"
          onChange={handleLevel}
        />
        <span>Advanced</span>
      </label>
      <span className="error-message">{formError}</span>
    </fieldset>
  );
};
