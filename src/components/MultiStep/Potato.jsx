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
            value="French Fries"
            checked={value === "French Fries"}
            onChange={potato}
          />
          French Fries
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="potato"
            value="Mashed Potatoes"
            checked={value === "Mashed Potatoes"}
            onChange={potato}
          />
          Mashed Potatoes
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="potato"
            value="Potato Chips"
            checked={value === "Potato Chips"}
            onChange={potato}
          />
          Potato Chips
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="potato"
            value="Potato Salad"
            checked={value === "Potato Salad"}
            onChange={potato}
          />
          Potato Salad
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
          None of the above - I'd rather not be a potato dish.
        </label>
      </div>
    </div>
  );
};
