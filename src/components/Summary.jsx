<<<<<<< HEAD
/* eslint-disable react/prop-types */

export const Summary = ({ user }) => {
  const { favPerson, celebrity, payingPerson} = user;
  return (

    <div className="summary-container"> {/* A container for the summary */}
    {/* Displaying a personalized message based on user inputs */}
    <p>Hi NAME! You have booked a activity trip to country for you and {favPerson}, we arranged so that {celebrity} will join in aswell, and we will send the bill to {payingPerson} ENJOY!!!</p>
    <p> (No were just kidding this is just a suggestion, you will have to arrange and book the trip all by yourself!)</p>
  </div> 
  )
}
=======
// Creating the Summary component as a functional component
 export const Summary = ({ user, restartSurvey }) => {
  // Extracting user inputs from the user prop
  const { name, activity, country } = user;
  
  // Returning JSX to render the component
  return (
    <div className="summary-container"> {/* A container for the summary */}
      {/* Displaying a personalized message based on user inputs */}
      <p>Hi {name}! You have booked a {activity} trip to {country} for you and FAVORITEPERSON, we arranged so that CELEBERTY will join in aswell, and we will send the bill to SELECTEDPERSON ENJOY!!!</p>
      <p className="small-text"> (No were just kidding this is just a suggestion, you will have to arrange and book the trip all by yourself!</p>
      <button className="submit-button" onClick={restartSurvey}>Restart Survey</button> {/* Restart button */}
    </div> 
  );
}; 
>>>>>>> sandrasBranch
