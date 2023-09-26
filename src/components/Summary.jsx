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
