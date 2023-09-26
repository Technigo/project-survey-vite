import React from 'react'; // Importing the React library to create a component
// Creating the Country component as a functional component
export const Country = ({ user, handleInputChange }) => {
  // Returning JSX to render the component
  return (
    <div className="question-container"> {/* A container for the question */}
      {/* Displaying the question */}
     <label htmlFor="country" className="question">Which country are you from?</label>
      
      {/* Creating a dropdown list with the id of "country" */}
      <select
        id="country" 
        name="country" // Setting the name to be used in the handleInputChange function
        value={user.country} // The currently selected country, pulled from the user state object
        onChange={handleInputChange} // Function to call when a different country is selected
        autoComplete="country-name" // Added autocomplete attribute
      >
        {/* Creating an option for each country */}
        <option value="Norway">Norway</option>
        <option value="Poland">Poland</option>
        <option value="Sweden">Sweden</option>
        <option value="Germany">Germany</option>
        <option value="Austria">Austria</option>
        <option value="Finland">Finland</option>
        <option value="Iceland">Iceland</option>
        <option value="Italy">Italy</option>
        <option value="Dubai">Dubai</option>
      </select>
    </div>
  );
};


