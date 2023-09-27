export const Superpower = ({ updateFormData, value }) => {
  const superpowerInput = (e) => {
    updateFormData("superpower", e.target.value);
  };
  return (
    <form>
      <select value={value} onChange={superpowerInput}>
        <option value="">Select super power</option>
        <option value="flying">Flying</option>
        <option value="invisibility">Invisibility</option>
        <option value="superspeed">Super speed</option>
      </select>
    </form>
  );
};
