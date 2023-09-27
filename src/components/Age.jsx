
export const Age = ({ updateFormData, value }) => {
    const childsAge = (event) =>
        updateFormData("Age", event.target.value);

    return (
        <div>
            <label>How old are you?:</label>
            <input type="text" value={value} onChange={childsAge} />
        </div>
    )
}
