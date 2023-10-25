export const TravelDestinationInput = ({ value, updateFormData }) => {
  const TravelDestination = (e) => updateFormData("name", e.target.value);

  return (
    <div>
      <label>Travel Destination:</label>
      <input type="text" value={value} onChange={TravelDestination} />
    </div>
  );
};
