import React, { useState } from "react";
import "./index.css";

const ageGroups = ["0-18", "19-30", "30+"];

export const AgeGroup = () => {
    const [ageGroup, setAgeGroup] = useState();

    return (
        <form>
            <h1>What agre group are you</h1>
            {ageGroups.map(group => (
                <label key={group}>
                    <input type="radio"
                        value={group}
                        onChange={event => setAgeGroup(event.target.value)}
                        checked={ageGroup === group} />
                    {group}
                </label>
            ))}
        </form>
    );
};
