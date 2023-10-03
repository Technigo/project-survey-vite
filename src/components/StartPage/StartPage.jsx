import "./StartPage.css";

export const StartPage = ({ handleNextQuestion }) => {
  return (
    <div className="start-wrapper">
      <div className="right-column">
        <h1>Adopt a Cat</h1>
        <h2>Find your fur-ever pet!</h2>
        {/* When the button is clicked it will trigger the handleNextQuestion function */}
        <button onClick={handleNextQuestion} className="adopt-btn">
          Adopt now
        </button>
      </div>
      <div className="hero-image">
        <img src="/cat-background.jpg" alt="" />
      </div>
    </div>
  );
};
