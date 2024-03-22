import { useState } from "react";
import { BackSubmitButtons } from "./BackSubmitButtons";

export const Question3 = ({ onNext, onBack, setFormData }) => {
  //Initialize  a state for the dropdown list of the question 3
  const [third, setThird] = useState("");

  // Update the state of the question based on the user's selection option
  const handleChange = (e) => {
    const { value } = e.target;
    setThird(value); // Update the local state for the answer
    setFormData((prevFormData) => ({
      // Update the formData state in the parent component
      ...prevFormData,
      answer3: value,
    }));
  };

  const handleFocus = (e) => {
    e.target.removeAttribute("placeholder");
  };

  return (
    <div className="container-question">
      <label className="question" htmlFor="question3">
        How many browser tabs do you typically have open while trying to focus
        on one task?
      </label>
      <select
        className="custome-select"
        id="question3"
        name="question3"
        value={third}
        onChange={handleChange}
        onFocus={handleFocus}
      >
        <option value="" disabled>
          {" "}
          Select an option 👇{" "}
        </option>
        <option value="Just one">
          Just one, I am all about single-tasking
        </option>
        <option value="A few">A few, for necessary references.</option>
        <option value="Too many to count">
          Too many to count, but they are all totally relevant... I think.
        </option>
        <option value="My computer might crash if I close any of them.">
          My computer might crash if I close any of them.
        </option>
      </select>
      <BackSubmitButtons onNext={onNext} onBack={onBack} />
    </div>
  );
};

//modified the initial option value to include the "disabled" attribute to prevent it from being selected.
