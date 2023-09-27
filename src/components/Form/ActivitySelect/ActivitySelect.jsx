import React, { useState } from "react"
import "./ActivitySelect.css"


export const ActivitySelect = () => {

    const [activityOption, setActivityOption] = useState('option')

    const handleSelectChange = (event) => {
        setActivityOption(event.target.value)
    }

    return (
        <div>
            <h3>What's do you want to do?</h3>
            <select value={activityOption} onChange={handleSelectChange}>
                <option value="option">Please select an activity</option>
                <option value="chill">Chill</option>
                <option value="sports">Sports</option>
            </select>
        </div>
    )
}

