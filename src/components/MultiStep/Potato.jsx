import React, { useState } from "react";

export const Potato = ({ updateFormData, value }) => {
  const potato = (e) => updateFormData("potato", e.target.value);

  return (
    <div>
      <label>Which potato dish would you want to become? 🥔</label>
      <div>
        <label>
          <input
            type="radio"
            name="potato"
            value="French fries"
            checked={value === "French fries"}
            onChange={potato}
          />
          French fries
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="potato"
            value="Mashed potatoes"
            checked={value === "Mashed potatoes"}
            onChange={potato}
          />
          Mashed potatoes
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="potato"
            value="Potato chips"
            checked={value === "Potato chips"}
            onChange={potato}
          />
          Potato chips
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="potato"
            value="Potato salad"
            checked={value === "Potato salad"}
            onChange={potato}
          />
          Potato salad
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="potato"
            value="None"
            checked={value === "None"}
            onChange={potato}
          />
          None of the above
        </label>
      </div>
    </div>
  );
};
