import React, { useState } from "react";
import "./index.css";
import "./formStyle.css";

const StayDays = ["1-7 days", "7-14 days", "14-19 days", "more than 19 days"];

export const StayDay = ({ updateFormData, value }) => {
    const [selectedStayDay, setSelectedStayDay] = useState(""); // Define selectedAgeGroup state

    const choosenStayDay = (e) => {
        const selectedValue = e.target.value;
        setSelectedStayDay(selectedValue);
        updateFormData("stayDay", selectedValue);
    };

    return (
        <form>
            <h2>How long did you stay at The Sun Hotel?</h2>
            {StayDays.map(group => (
                <label className="stayDay" key={group}>
                    <input
                        type="radio"
                        value={group}
                        onChange={choosenStayDay}
                        checked={selectedStayDay === group}
                    />
                    {group}
                </label>
            ))}
        </form>
    );
};


