import React from "react";

export const Summary = ({ formData }) => {
  return (
    <div>
      <p>{formData.whatIs} whatIs</p>
      <p>{formData.variable} variable</p>
      <p>{formData.datatypes} datatypes</p>
      <p>{formData.companiesReact} companiesReact</p>
    </div>
  );
};
