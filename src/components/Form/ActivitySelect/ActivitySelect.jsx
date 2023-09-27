import "./ActivitySelect.css"

// eslint-disable-next-line
export const ActivitySelect = ({ updateFormData, value}) => {

    const activity = (e) => updateFormData("activity", e.target.value);

    return (
        <div>
            <h3>What do you want to do?</h3>
            <select value={value} onChange={activity}>
                <option value="option">Please select an activity</option>
                <option value="chill">Chill</option>
                <option value="sports">Sports</option>
                <option value="sightseeing">Sightseeing</option>
            </select>
        </div>
    )
}

