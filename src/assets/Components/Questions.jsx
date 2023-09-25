import { useState } from "react";
import Summary from "./Summary";

export const Questions = () => {
  {/* Create a controlled text area where the user can type in their fitness goal */}
  const [fitnessGoal, setFitnessGoal] = useState("");

  const handleTextareaChange = (e) => {
    setFitnessGoal(e.target.value);
  }

  return (
      <>
        {/* Add questions here */}
        {/* Question about fitness goal */}
        <label>
          What is your fitness goal?
          <textarea 
            name="fitness-goal" 
            rows={4} 
            cols={40} 
            placeholder="I aim to..." 
            value={fitnessGoal}
            onChange={handleTextareaChange}
          />
        </label>
        <Summary fitnessGoal={fitnessGoal}/>
      </>
    );
};