// Isaac
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const Submit = () => {
  const [formData] = useState("");
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = () => {
    setShowSummary(true);
  };

  return (
    <div>
      {showSummary ? (
        <div>
          <h2>Summary:</h2>
          <p>User Submission: {formData}</p>
        </div>
      ) : (
        <div>
          <button onClick={handleSubmit}>Inte Denna</button>
        </div>
      )}
    </div>
  );
};
