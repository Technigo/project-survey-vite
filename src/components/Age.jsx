// eslint-disable-next-line no-unused-vars
const ageGroups = ["16-18", "18-25", "25-40"];

export const Age = ({ value, updateFormData }) => {
  const userAge = (e) => {
    updateFormData("age", e.target.value);
  };

  return (
    <div>
      <form>
        Age Group:
        {ageGroups.map((group, index) => (
          <div key={index}>
            <input
              type="radio"
              value={group}
              checked={value === group} // Check if the value matches the group
              onChange={userAge}
            />
            <label>{group}</label>
          </div>
        ))}
      </form>
    </div>
  );
};
