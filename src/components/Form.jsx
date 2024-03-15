import { useState } from "react";
import { Email } from "./Email";
import { Activity } from "./Activity";
import { Level } from "./Level";
import { Requirements } from "./Requirements";
import { Summary } from "./Summary";

// Object for the form input info
export const Form = () => {
  const [formData, setFormData] = useState({
    selectedOption: "default",
    selectedLevel: "",
    specialRequirements: "",
    emailValue: "",
  });

  // Object for errrors
  const [formErrors, setFormErrors] = useState({
    selectedOption: "",
    selectedLevel: "",
    emailValue: "",
  });
  const [hidden, setHidden] = useState("");

  // Function that handles the inputs from the different fields
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

  // Function that upon clicking the submit button, checks if all fields have been
  // properly filled in all the required fields. If not, the appropriate error message is
  // displayed. If all is filled in, the form field is hidden and the  summary is shown.
  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = { ...formErrors };
    if (formData.selectedOption.trim() === "default") {
      errors.selectedOption = "Please select an activity.";
    } else if (formData.selectedLevel.trim() === "") {
      errors.selectedLevel = "Please select your level.";
    } else if (formData.emailValue.trim() === "") {
      errors.emailValue = "Please enter your email.";
    }
    setFormErrors(errors);
    // Extracts the values of the formError object and turns them into an array.
    // Then checks that every error value in the array is an empty string,
    // which means that there are no errors
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
