import "./EcoCheck.css"

// The EcoCheck component takes two props: updateFormData and value.
export const EcoCheck = ({ updateFormData, value }) => {
    // The eco function is a callback function that updates the "eco" field in the form data when the checkbox is clicked.
    const eco = (e) => updateFormData("eco", e.target.checked);

    return (
        <div className="eco-wrapper">
            <h3>
                Would you like to take the train for the environment or fly
                there for convenience?
            </h3>
            <label >
                <div className="eco-label-wrapper">
                    {/* Display an eco-friendly label with an image */}
                    <img
                        className="eco-img"
                        src="/images/eco-leaf.png"
                        alt="A leaf icon."
                    ></img>
                    <div className="eco-label">
                    <p>Check the box</p>
                    <p>to choose the train:</p>
                    </div>
                </div>
                {/* Create a checkbox input */}
                <label className="checkbox-container">
                    <input type="checkbox" checked={value} onChange={eco} />
                    {/* Create a custom-styled checkbox */}
                    <span className="custom-checkbox"></span>
                    Want to stay on the ground?
                </label>
            </label>
        </div>
    );
}