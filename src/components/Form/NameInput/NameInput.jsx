import "./NameInput.css"

// The NameInput component takes two props: updateFormData and value.
export const NameInput = ({ updateFormData, value }) => {
    // The name function is a callback function that updates the "name" field in the form data when the user enters their name.
    const name = (e) => updateFormData("name", e.target.value)

    return (
        <>
            <div className="nameinput-wrapper">
                <h1>Hey Dreamer!</h1>
                <h3>Please tell us your name</h3>
                {/* Create a label and input field for the user to enter their name */}
                <label className="nameinput-container">
                    Name:
                    <input
                        type="text"
                        value={value}
                        placeholder="Enter your name"
                        onChange={name}
                    />
                </label>
            </div>
        </>
    )
}