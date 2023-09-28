import "./ActivitySelect.css"

// eslint-disable-next-line
export const ActivitySelect = ({ updateFormData, value}) => {

    const activity = (e) => updateFormData("activity", e.target.value);

    return (
        <div>
            <h3>And what do you want to do when you're there?</h3>
            <label className="label-small">
                Please choose one of the following options: 
                <select className="select-menu" value={value} onChange={activity}>
                    <option value="default" disabled selected>Select an activity</option>
                    <option value="chill">Chill</option>
                    <option value="sports">Sports</option>
                    <option value="sightseeing">Sightseeing</option>
                </select>
            </label>
        </div>
    )
}

