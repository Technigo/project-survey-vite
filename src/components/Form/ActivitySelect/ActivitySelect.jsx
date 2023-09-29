import "./ActivitySelect.css"

// The ActivitySelect component takes two props: updateFormData and value.
export const ActivitySelect = ({ updateFormData, value}) => {
    // The activity function is a callback function that updates the "activity" field in the form data.
    const activity = (e) => {
        // Calls the updateFormData function with the field name "activity" and the selected value.
        updateFormData("activity", e.target.value)
    }

    return (
        <div className="selection-wrapper">
            <h3>And what do you want to do when you're there?</h3>
            <label className="label-small">
                {/* Display a label with instructions for the user */}
                <p>Please choose one of</p>
                <p>the following options:</p>
                {/* Create a dropdown select menu */}
                <select
                    className="select-menu"
                    value={value}
                    onChange={activity}
                >
                    {/* Display a default option that's disabled and cannot be selected */}
                    <option value="default" disabled>
                        Select an activity
                    </option>
                    <option value="chill">Chill</option>
                    <option value="sports">Sports</option>
                    <option value="sightseeing">Sightseeing</option>
                </select>
            </label>
        </div>
    );
}