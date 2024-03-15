export const Summary = ({ value, mood, song }) => {
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Summary of The Science of Happiness</h2>
        <p>{value} is your mood-boosting activity.</p>
        <p>{mood}, and if ever you are down - listen to {song}</p>
      </div>
    </div>
  );
};