/* eslint-disable react/prop-types */
// Creating the Summary component as a functional component
 export const Summary = ({ user, restartSurvey }) => {
  // Extracting user inputs from the user prop
  const { name, activity, country, favPerson, celebrity, payingPerson } = user;
  
  // Returning JSX to render the component
  return (
    <div className="summary-container"> {/* A container for the summary */}
      {/* Displaying a personalized message based on user inputs */}
      <p>Hi {name}! You have booked a {activity} trip to {country} for you and {favPerson}, we arranged so that {celebrity} will join in aswell, and we will send the bill to {payingPerson} ENJOY!!!</p>
      <p className="small-text">(No were just kidding this is just a suggestion, you will have to arrange and book the trip all by yourself!)</p>
      <button className="submit-button" onClick={restartSurvey}>Restart Survey</button> {/* Restart button */}
    </div> 
  );
}; 
