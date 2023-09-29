import React, { useState } from "react";
import "./index.css";

export const Email = ({ value, updateFormData }) => {
    const userEmail = (e) => updateFormData("email", e.target.value);
    return (
        <div className="emailInput">
            <h2>What is your e-mail adress?</h2>
            <label>Email</label>
            <input type="text" value={value} onChange={userEmail} />
        </div>
    );

};
