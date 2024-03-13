export const Summary = ({ optionSummary, index }) => {
  console.log(optionSummary);
  console.log(index);

  return (
    <section className="summary-section">
      <p>Thank you for participanting! Here are your choices:</p>
      {optionSummary.map((option, index) => (
        <p key={index}>{option}</p>
      ))}
    </section>
  );
};
