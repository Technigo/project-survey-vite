import "./Age.css";

const ageGroups = ["Adult", "Kitten"];

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
      <h3>Adult or kitten?</h3>
      {ageGroups.map((kittenAdult) => (
        <label key={kittenAdult}>
          <input
            type="radio"
            className="radio-btn age"
            value={kittenAdult}
            onChange={handleAge}
            checked={age === kittenAdult}
          />
          {kittenAdult}
        </label>
      ))}
    </form>
  );
};
