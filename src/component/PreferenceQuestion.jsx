const preferences = ["beach", "mountain", "city"];

export const PreferenceQuestion = ({value, setValue}) => {
    
    const preference = value
    const setPreference = setValue
    
    return(
        preferences.map(group => (
            <label key={group}>
            <input
                type="radio"
                value={group}
                onChange={event => setPreference(event.target.value)}
                checked={preference === group}
            />
            {group}
            </label>
        ))
        );
        };
    
      