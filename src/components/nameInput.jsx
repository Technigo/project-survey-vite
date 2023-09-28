import React, { useState } from "react";
import "./index.css";

export const Name = ({ value, updateFormData }) => {
    const userName = (e) => updateFormData("name", e.target.value);
    return (
        <div>
            <label>Name:</label>
            <input type="text" value={value} onChange={userName} />
        </div>
    );
};
