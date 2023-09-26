/* eslint-disable react/prop-types */
// Creating the Name component as a functional component
export const Name = ({ user, handleInputChange }) => {
 // Returning JSX that gets rendered to the screen
    return (
    <div className="question-container">
        <label htmlFor="name" className="Question">Whats your name?</label>
        <input
        type="text"
        id="name"
        name="name"
        value={user.name}
        onChange={handleInputChange}
        autoComplete="name" // Added autocomplete attribute
        />
         </div>
  )
}
 

