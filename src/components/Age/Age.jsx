const ageGroups = ["Adult", "Kitten"];

// Rendering a form with radio buttons to select the age of the cat.
export const Age = ({ age, setAge }) => {
  const handleAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <form
      className="age-form"
      onSubmit={(event) => event.preventDefault()}
      required
    >
      {/* Mapping over the 'ageGroups' array and creates a radio button input for each item (Adult, Kitten). */}
      <h3>Adult or kitten?</h3>
      {ageGroups.map((kittenAdult) => (
        /* Using label element to improve accssibility and user experience. The 'Key' prop is used to uniquely identify each label element which the radio buttons is wrapped in. */
        <div className="radio-input-wrapper" key={kittenAdult}>
          <label className="radio-label">
            <input
              type="radio"
              className="radio-input"
              value={kittenAdult}
              onChange={handleAge}
              checked={age === kittenAdult}
            />
            <div className="radio-design"></div>
            <div className="radio-label-text">{kittenAdult}</div>
          </label>
        </div>
      ))}
    </form>
  );
};
