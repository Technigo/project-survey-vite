export const ReasonTravel = ({ value, updateReason }) => {
  const handleTravelReasonChange = (e) => updateReason(e.target.value);

  return (
    <div>
      <label htmlFor="travelReason">Travel Reason:</label>
      <input
        type="text"
        id="travelReason"
        value={value}
        onChange={handleTravelReasonChange}
      />
      {/* <input type="radio" value={value}>
        Personal{" "}
      </input> */}
    </div>
  );
};
