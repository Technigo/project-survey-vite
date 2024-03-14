import React from "react";

export const Summary = ({ hidden, formData }) => {
  return (
    <div id="summary" className={hidden === "" ? "hidden" : ""}>
      <h3>Thank you! </h3>
      <h4>
        We will get in contact with you very soon. A suggested quest will be
        chosen based on your answers, a summary of which can be seen below:
      </h4>
      <hr />
      <p>Selected activity: {formData.selectedOption}</p>
      <p>Selected level: {formData.selectedLevel}</p>
      <p>Special requirements: {formData.specialRequirements}</p>
      <p>Contact email: {formData.emailValue}</p>
      <hr />
    </div>
  );
};
