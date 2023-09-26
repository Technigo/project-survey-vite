import { useState } from "react";

export const FitnessGoal = () => {
  {/* Initialize a controlled text area where the user can type in their fitness goal */}
  const [fitnessGoal, setFitnessGoal] = useState("");

  /* Update the change of the text area based on the user's answer */
  const updateTextarea = (e) => {
    setFitnessGoal(e.target.value);
  }

  return (
      <div className="fitness-goal">
        {/* Question about fitness goal */}
        <label>
          What is your fitness goal?
          <textarea 
            name="fitness-goal" 
            rows={4} 
            cols={40} 
            placeholder="I aim to..." 
            value={fitnessGoal}
            onChange={updateTextarea}
          />
        </label>
      </div>
    );
};