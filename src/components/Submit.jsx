export const Submit = ({ formData }) => {
  if (!formData) {
    return null;
  }
  const { name, age, bloodType, allergies } = formData;

  const formattedData = `
  Name: ${name}
  Age: ${age}
  Blood Type: ${bloodType}
  Allergies: ${allergies}
  `;

  return (
    <div className="summary">
      <h2>Summary:</h2>
      <pre>{formattedData}</pre>
    </div>
  );
};
