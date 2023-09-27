/* eslint-disable react/prop-types */


export const FitnessGoal = ({goal , onChangeText}) => {
  {/* Initialize a controlled text area where the user can type in their fitness goal */}
 

  /* Update the change of the text area based on the user's answer */
 

  return (
      <div className="fitness-goal">
        {/* Question about fitness goal */}
        <label>
          What is your fitness goal?
          <textarea 
            name="fitness-goal" 
            rows={3} 
            cols={30} 
            placeholder="I aim to..." 
            value={goal}
            onChange={onChangeText}
          />
        </label>
      </div>
    );
};