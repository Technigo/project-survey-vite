export const TravelDestination = ({ value, updateDestination }) => {
  const handleDestinationChange = (e) => updateDestination(e.target.value);

  return (
    <div>
      <label htmlFor="travelDestination">Travel Destination:</label>
      <input
        type="text"
        id="travelDestination"
        value={value}
        onChange={handleDestinationChange}
      />
    </div>
  );
};
