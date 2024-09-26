
export const HowOften = ({ updateFormData, value }) => {
  const handleHowOftenChange = (e) => updateFormData("howOften", e.target.value);

  return (
    <form>
      <select onChange={handleHowOftenChange} value={value}>
        <option value="">How often do you order - test</option>
        <option value="Monthly">Monthly</option>
        <option value="Every-second-month">Every second month</option>
        <option value="Rarely">Rarely</option>
        <option value="Never">Never</option>
      </select>
    </form>
  );
};