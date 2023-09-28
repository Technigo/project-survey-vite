import React, { useState } from "react";
import "./index.css";

const Stars = ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"];

export const Star = ({ updateFormData, value }) => {
    const [selectedStar, setSelectedStar] = useState(""); // Define selectedAgeGroup state

    const choosenStar = (e) => {
        const selectedValue = e.target.value;
        setSelectedStar(selectedValue); // Update the selectedAgeGroup state
        updateFormData("star", selectedValue); // Use "ageGroup" as the field name
    };

    return (
        <form>
            <h2>How many stars would you like to give us?</h2>
            {Stars.map(group => (
                <label key={group}>
                    <input
                        type="radio"
                        value={group}
                        onChange={choosenStar}
                        checked={selectedStar === group}
                    />
                    {group}
                </label>
            ))}
        </form>
    );
};




