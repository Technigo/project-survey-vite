export const Allergies = ({ value, updateFormData }) => {
  const allergies = (e) => updateFormData("allergies", e.target.value);
  return (
    <div>
      <form>
        <label>
          Do you have any allergies? If you do, type them here, otherwise go to
          the next step.
        </label>
        <input type="text" value={value} onChange={allergies} />
      </form>
    </div>
  );
};
