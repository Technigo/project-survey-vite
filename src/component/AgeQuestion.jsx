/* eslint-disable react/prop-types */

export const AgeQuestion = ({ value, setValue, setIsAgeValid }) => {
  const ageInput = (event) => {
    const ageValue = event.target.value;
    setValue("age", ageValue);

    if (parseInt(ageValue, 10) < 18) {
      setIsAgeValid(false);
    } else {
      setIsAgeValid(true);
    }
  };

  return (
    <label className="question-name-age">
      What&apos;s your age?
      <input
        placeholder="Age here..."
        type="number"
        onChange={ageInput}
        value={value}
      />
    </label>
  );
};
