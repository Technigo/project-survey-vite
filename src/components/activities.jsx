import React from "react";

export const Activity = ({ value, updateFormData }) => {
    const handleActivityChange = (e) => {
        updateFormData("activity", e.target.value);
    };

    return (
        <div>
            <h2>Did you take part in any activities during your stay?</h2>
            <select value={value} onChange={handleActivityChange}>
                <option value="">Select an activity</option>
                <option value="a surfing">Surfing</option>
                <option value="a hiking">Hiking</option>
                <option value="a boat trip">Boat trip</option>
                <option value="a yoga class">Yoga Class</option>
                <option value="a massage">Massage</option>
                <option value="none">none</option>
            </select>
        </div>
    );
};
