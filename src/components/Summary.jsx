/* eslint-disable react/prop-types */
// Creating the Summary component as a functional component
 export const Summary = ({ user, restartSurvey }) => {
  // Extracting user inputs from the user prop
  const { name, activity, country, favPerson, celebrity, payingPerson } = user;
  
  // Returning JSX to render the component
  return (
    <div className="summary-container"> {/* A container for the summary */}
      {/* Displaying a personalized message based on user inputs */}
      
        <img src="src/assets/map.jpg" className="pic-summary"/>
      
      <div>
        <h2>Hi {name}!</h2>
      <p className="text-summary"> You have booked a {activity} trip to {country} for you and {favPerson}, we arranged so that {celebrity} will join in aswell, and we will send the bill to {payingPerson} ENJOY!!!</p>
        <p className="signature">Best regards, The Travel team</p>
        </div>
      <button className="restart-button" type="submit" onClick={restartSurvey}>Restart Survey</button> {/* Restart button */}
    </div> 
  );
}; 
