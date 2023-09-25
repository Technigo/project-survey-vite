import { useState } from "react";
import { Summary } from "./Summary";

export const Questions = () => {
    return (
      <>
        {/* Add questions here */}
        <label>
          What is your fitness goal?
          <textarea name="fitness-goal" rows={4} cols={40} placeholder="I aim to..." />
        </label>
        <Summary />
      </>
      
    );
};