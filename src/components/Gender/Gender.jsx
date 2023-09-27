import "./Gender.css";
import { genderGroups } from "../Arrays.jsx";

export const Gender = ({ genders, setGenders }) => {
  const handleGenders = (event) => {
    setGenders(event.target.value);
  };
  return (
    <form
      className="gender-form"
      onSubmit={(event) => event.preventDefault()}
      required
    >
      <h3>Choose gender</h3>
      <p>What gender should the cat be?</p>
      {genderGroups.map((gender) => (
        <label key={gender.id}>
          <input
            type="radio"
            className="radio-btn gender"
            value={gender.id}
            onChange={handleGenders}
            checked={genders === gender.id}
          />
          {gender.id}
        </label>
      ))}
    </form>
  );
};


