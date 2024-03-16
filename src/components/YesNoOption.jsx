import { useState } from "react";

export const YesNoOption = () => {
  const [recommend, setRecommend] = useState("");

  const yesNoOptions = ["Yes", "No"];

  return (
    <fieldset className="form-area">
      <legend>Would you recommend us to someone else?</legend>
      {yesNoOptions.map((option) => (
        <label className={`form-area radio-options ${recommend === option ? "selected" : ""}`} key={option}>
          <input
            type="radio"
            value={option}
            name="recommendation"
            onChange={(event) => setRecommend(event.target.value)}
            checked={recommend === option}
            required
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};
