import React from "react";

export function SubmitButton({ onClick }) {

  return (
    <button type="submit" className="submitButton" onClick={onClick}>
      Submit
    </button>
  );
}
