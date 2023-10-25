export const ReasonTravel = ({ value, updateFormData }) => {
  const TravelReason = (e) => updateFormData("reason", e.target.value);

  return (
    <div>
      <label>Travel Reason:</label>
      <input type="text" value={value} onChange={TravelReason} />
      {/* <input type="radio" value={value}>
        Personal{" "}
      </input> */}
    </div>
  );
};
