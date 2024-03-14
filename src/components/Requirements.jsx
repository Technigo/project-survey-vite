import { useState } from "react";

export const Requirements = (props) => {
  const [specialRequirement, setSpecialRequirements] = useState("");

  const handleRequirementInput = (event) => {
    setSpecialRequirements(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <fieldset>
      <legend>
        <h3>3.</h3>
        <p>
          Do you have any specific requirements, such as dietary restrictions,
          medical needs, or mobility assistance? (optional)
        </p>
      </legend>
      <textarea
        type="text"
        id="requirement-text"
        placeholder="Write your answer here"
        value={specialRequirement}
        onChange={handleRequirementInput}
      />
    </fieldset>
  );
};
