export const StartPage = ({ handleStart }) => {
  return (
    <section className="start-section">
      <h1>Welcome to the Dream Home Survey</h1>
      <button type="button" onClick={handleStart}>
        Start!
      </button>
    </section>
  );
};
