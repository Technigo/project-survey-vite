import { useState } from "react";
import { BackNextButtons } from "./BackNextButtons";

export const Intro = ({ onNext, onBack, setFormData }) => {
  const [inputs, setInputs] = useState({ username: "", age: "" });
  const [fieldsFilled, setFieldsFilled] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    // Check if both fields are filled
    setFieldsFilled(value !== "" && inputs.age !== "");
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFocus = (event) => {
    if (event.target.name === "age" || event.target.name === "username") {
      event.target.removeAttribute("placeholder");
    }
  };

  return (
    <div className="container-question">
      <div>
        <label htmlFor="username">Name</label>
        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          id="username"
          value={inputs.username}
          onChange={handleChange}
          onFocus={handleFocus}
          autoComplete="name"
          required
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          id="age"
          placeholder="Enter your age"
          value={inputs.age}
          onChange={handleChange}
          onFocus={handleFocus}
          required
        />
      </div>
      <BackNextButtons
        onNext={() => onNext(inputs)}
        onBack={onBack}
        disabled={!fieldsFilled}
      />
    </div>
  );
};
