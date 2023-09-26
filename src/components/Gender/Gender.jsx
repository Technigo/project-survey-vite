import "./Gender.css";

export const Gender = (gender, setGender) => {
  const genderChange = (event) => setGender(event.target.value);
  return (
    <form className="gender-form">
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={gender === genderChange}
        onChange={genderChange}
      ></input>
      <label htmlFor="female"> Female </label>

      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={gender === genderChange}
        onChange={genderChange}
      ></input>
      <label htmlFor="male"> Male </label>
    </form>
  );
};
