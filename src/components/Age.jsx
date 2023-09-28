import React, { useState } from "react";
import "./index.css";

const ageGroups = ["1", "2", "3", "4", "5"];

export const AgeGroup = ({ updateFormData, value }) => {
    const [selectedAgeGroup, setSelectedAgeGroup] = useState(""); // Define selectedAgeGroup state

    const choosenAgeGroup = (e) => {
        const selectedValue = e.target.value;
        setSelectedAgeGroup(selectedValue); // Update the selectedAgeGroup state
        updateFormData("ageGroup", selectedValue); // Use "ageGroup" as the field name
    };

    return (
        <form>
            <h2>How many stars would you like to give us?</h2>
            {ageGroups.map(group => (
                <label key={group}>
                    <input
                        type="radio"
                        value={group}
                        onChange={choosenAgeGroup}
                        checked={selectedAgeGroup === group}
                    />
                    {group}
                </label>
            ))}
        </form>
    );
};




