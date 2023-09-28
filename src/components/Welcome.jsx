/* eslint-disable react/prop-types */

export const Welcome = ({ startSurvey }) => {
  return (
    <div className="summary-container">
      <h1>Welcome!</h1>
      <p>Would you like to travel with us?</p>
      <img className="welcome-image" src="./src/assets/airplane.jpg" alt="Airplane" />
      <button className="restart-button" onClick={startSurvey}>Start</button>
    </div>
  );
};