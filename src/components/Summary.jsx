// Creating the Summary component as a functional component
 export const Summary = ({ user }) => {
  // Extracting user inputs from the user prop
  const { name, activity, country } = user;
  
  // Returning JSX to render the component
  return (
    <div className="summary-container"> {/* A container for the summary */}
      {/* Displaying a personalized message based on user inputs */}
      <p>Hi {name}! You have booked a {activity} trip to {country} for you and FAVORITEPERSON, we arranged so that CELEBERTY will join in aswell, and we will send the bill to SELECTEDPERSON ENJOY!!!</p>
      <p> (No were just kidding this is just a suggestion, you will have to arrange and book the trip all by yourself!</p>
    </div> 
  );
}; 
