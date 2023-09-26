// Creating the Activity component as a functional component
 export const Activity = ({ user, handleInputChange }) => {
  // Returning JSX to render the component
  return (
    <div className="question-container"> 
      {/* Displaying the question */}
      <p className="question">What is your favorite activity?</p>
      
      {/* Creating a list of radio buttons for each activity */}
       <div className="options">
        {/* Each input has a unique id, the same name (to group the radio buttons), 
             and a value corresponding to the activity. 
  When a radio button is clicked, handleInputChange will be called to update the state */}
        
        <label className="option">
          <input 
            type="radio" 
            name="activity" 
            value="skiing" 
            checked={user.activity === 'skiing'} 
            onChange={handleInputChange} 
          /> Skiing
        </label>
        
        <label className="option">
          <input 
            type="radio" 
            name="activity" 
            value="horseback riding" 
            checked={user.activity === 'horseback riding'} 
            onChange={handleInputChange} 
           />Horseback Riding          
           </label>
 

 
        <label className="option">
          <input type="radio" name="activity" value="tennis" checked={user.activity === 'tennis'} onChange={handleInputChange} /> Tennis
        </label>
        <label className="option"> 
         <input type="radio" name="activity" value="football" checked={user.activity === 'football'} onChange={handleInputChange} /> Football
        </label>
        <label className="option">
          <input type="radio" name="activity" value="skijumping" checked={user.activity === 'skijumping'} onChange={handleInputChange} /> Ski Jumping
        </label>
        <label className="option">
          <input type="radio" name="activity" value="sailing" checked={user.activity === 'sailing'} onChange={handleInputChange} /> Sailing
        </label>
      </div>
    </div>
  );
};
 
