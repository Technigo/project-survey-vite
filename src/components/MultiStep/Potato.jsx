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
            value="french-fries"
            checked={value === "french-fries"}
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
            value="mashed"
            checked={value === "mashed"}
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
            value="chips"
            checked={value === "chips"}
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
            value="salad"
            checked={value === "salad"}
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
            value="none"
            checked={value === "none"}
            onChange={potato}
          />
          None of the above - I'd rather not be a potato dish.
        </label>
      </div>
    </div>
  );
};
