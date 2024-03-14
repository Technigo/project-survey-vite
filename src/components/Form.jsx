import { useState } from "react";
import { Email } from "./Email";
import { Activity } from "./Activity";
import { Level } from "./Level";
import { Requirements } from "./Requirements";
import { Summary } from "./Summary";

export const Form = () => {
  const [formData, setFormData] = useState({
    selectedOption: "select",
    selectedLevel: "",
    specialRequirements: "",
    emailValue: "",
  });

  const [formErrors, setFormErrors] = useState({
    selectedOption: "",
    selectedLevel: "",
    specialRequirements: "",
    emailValue: "",
  });
  const [hidden, setHidden] = useState("");

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
    setFormErrors({
      ...formErrors,
      [fieldName]: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = { ...formErrors };
    if (formData.selectedOption.trim() === "select") {
      errors.selectedOption = "Please select an activity.";
    } else if (formData.selectedLevel.trim() === "") {
      errors.selectedLevel = "Please select your level.";
    } else if (formData.emailValue.trim() === "") {
      errors.emailValue = "Please enter your email.";
    }
    setFormErrors(errors);
    if (Object.values(errors).every((arreyElement) => arreyElement === "")) {
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
        <Activity
          formError={formErrors.selectedOption}
          onChange={(value) => handleChange("selectedOption", value)}
        />
        <Level
          formError={formErrors.selectedLevel}
          onChange={(value) => handleChange("selectedLevel", value)}
        />
        <Requirements
          onChange={(value) => handleChange("specialRequirements", value)}
        />
        <Email
          formError={formErrors.emailValue}
          onChange={(value) => handleChange("emailValue", value)}
        />
        <button type="submit">Submit your answers</button>
      </form>
      <Summary hidden={hidden} formData={formData} />
    </div>
  );
};
