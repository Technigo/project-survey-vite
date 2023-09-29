import React, { useState } from "react";
import "./index.css";

export const Name = ({ value, updateFormData }) => {
    const userName = (e) => updateFormData("name", e.target.value);
    return (
        <div className="nameInput">
            <h2>What is your name?</h2>
            <label>Name (optional)</label>
            <input type="text" value={value}
                onChange={userName} />
        </div>
    );
};
