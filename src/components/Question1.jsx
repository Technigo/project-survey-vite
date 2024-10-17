// src/components/Question1

export const Question1 = ({ activity, setActivity }) => {
  return (
    <div className="question1">
      <h3>Whats your favorite mood boost activity?</h3>

      <input className="input-area"
        type="text"
        placeholder="Write your answer here..."
        onChange={(event) => setActivity(event.target.value)}
        value={activity}
        required

      />
    </div>
  );
};