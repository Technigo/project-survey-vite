import { useState } from "react";
import PropTypes from "prop-types";

// Component for the Budget Question

export const Budget = ({ onInputChange }) => {
  const [budget, setBudget] = useState("5000");

  const handleChange = (event) => {
    event.preventDefault();
    const newBudget = event.target.value;

    setBudget(newBudget);
    onInputChange("budget", newBudget);
  };

  return (
    <div className="questions">
      <p className="counter">4.</p>

      <label htmlFor="budget" className="labelQ">
        What is your budget?
        <input
          type="range"
          id="budget"
          className="budget-range"
          name="budget"
          min="100"
          max="10000"
          step="100"
          onChange={handleChange}
          value={budget}
        />
        <span> {budget} €</span>
      </label>
    </div>
  );
};

Budget.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
