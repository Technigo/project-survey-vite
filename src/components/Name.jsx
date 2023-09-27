
export const Name = ({ value, updateFormData }) => {
    const childsName = (event) => updateFormData("name", event.target.value);
    return (
        <div>
            <label>What is your name?:</label>
            <input type="text" value={value} onChange={childsName} />
        </div>
    )
}
