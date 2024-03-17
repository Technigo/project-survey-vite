import "./StartPage.css";

export const StartPage = ({ handleStart }) => {
  return (
    <section className="start-section">
      <h1>Welcome to the Dream Home Survey</h1>
      <button className="start-btn" type="button" onClick={handleStart}>
        Start!
      </button>
    </section>
  );
};
