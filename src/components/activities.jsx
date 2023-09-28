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
                <option value="surfing">Surfing</option>
                <option value="hiking">Hiking</option>
                <option value="boat trip">Boat trip</option>
                <option value="yoga Class">Yoga Class</option>
                <option value="massage">Massage</option>
                <option value="none">none</option>
            </select>
        </div>
    );
};
