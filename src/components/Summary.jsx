import React from "react";

export const Summary = ({ hidden, formData }) => {
  return (
    <div id="summary" className={hidden === "" ? "hidden" : ""}>
      <h4>Thank you! </h4>
      <h4>
        We will get in contact with you very soon. A suggested quest will be
        chosen based on your answers, a summary of which can be seen below:
      </h4>
      <hr />
      <p>
        <span className="selected">Selected activity: </span>
        {formData.selectedOption}
      </p>
      <p>
        <span className="selected">Selected level: </span>
        {formData.selectedLevel}
      </p>
      <p>
        <span className="selected">Special requirements: </span>
        {formData.specialRequirements}
      </p>
      <p>
        <span className="selected">Contact email: </span>
        {formData.emailValue}
      </p>
    </div>
  );
};
