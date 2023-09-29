import "./SeasonRadio.css"

// The SeasonRadio component takes two props: updateFormData and value.
export const SeasonRadio = ({ updateFormData, value }) => {
    // The season function is a callback function that updates the "season" field in the form data when the user selects a season.
    const season = (e) => updateFormData("season", e.target.value)

    return (
        <div className="seasonradio-wrapper">
            <h3>Are you longing for the sun, or for the winter snow?</h3>
            <label className="label-small">
                Please choose one of
                <br />
                the following options:
                {/* Create radio buttons for the user to choose between summer and winter */}
                <label className="seasonradio-container">
                    <input
                        type="radio"
                        name="season-choice"
                        value="summer"
                        onChange={season}
                        checked={value === "summer"}
                    />
                    {/* Use a custom radio button design */}
                    <span className="custom-radio"></span>
                    <p>Summer!</p>
                </label>
                <label className="seasonradio-container">
                    <input
                        type="radio"
                        name="season-choice"
                        value="winter"
                        onChange={season}
                        checked={value === "winter"}
                    />
                    {/* Use a custom radio button design */}
                    <span className="custom-radio"></span>
                    <p>Winter!</p>
                </label>
            </label>
        </div>
    )
}