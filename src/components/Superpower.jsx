export const Superpower = ({ updateFormData, value }) => {
  const superpowerInput = (e) => {
    updateFormData("superpower", e.target.value);
  };

  return (
    <form className="superpower">
      <label>Choose a superpower to your Hero</label>
      <select value={value} onChange={superpowerInput} required>
        <option value="">Select super power</option>
        <option value="flying">Flying</option>
        <option value="invisibility">Invisibility</option>
        <option value="superspeed">Super speed</option>
      </select>
    </form>
  );
};
