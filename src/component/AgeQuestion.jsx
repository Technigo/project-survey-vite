export const AgeQuestion = ({ value, setValue }) => {
  const [age, setAge] = [value, setValue];

  const ageInput = (e) => setAge("age", e.target.value);

  return (
    <label className="question-name-age">
      What's your age?
      <input
        placeholder="Age here..."
        type="number"
        onChange={ageInput}
        value={age}
      />
    </label>
  );
};
