import { useState } from "react";
import { Email } from "./Email";
import { Activity } from "./Activity";
import { Level } from "./Level";
import { Requirements } from "./Requirements";
import { Summary } from "./Summary";

export const Form = () => {
  const [formData, setFormData] = useState({
    selectedOption: "",
    selectedLevel: "",
    specialRequirements: "",
    emailValue: "",
  });
  const [hidden, setHidden] = useState("");
  const [formError, setFormError] = useState("");

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.emailValue.trim() === "") {
      setFormError("Please enter your email.");
    } else {
      setHidden((status) => (status === "hidden" ? "" : "hidden"));
    }
  };

  return (
    <div className="container">
      <form
        onSubmit={handleSubmit}
        id="survey-form"
        className={`form-flex ${hidden}`}
      >
        <Activity onChange={(value) => handleChange("selectedOption", value)} />
        <Level onChange={(value) => handleChange("selectedLevel", value)} />
        <Requirements
          onChange={(value) => handleChange("specialRequirements", value)}
        />
        <Email
          formError={formError}
          onChange={(value) => handleChange("emailValue", value)}
        />

        <button type="submit">Submit your answers</button>
      </form>
      <Summary hidden={hidden} formData={formData} />
    </div>
  );
};
