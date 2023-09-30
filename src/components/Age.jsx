
export const Age = ({ updateFormData, value }) => {
    const childsAge = (event) =>
        updateFormData("age", event.target.value);

    return (
        <div className="age">
            <img src="/assets/numbers-removebg-preview.png" alt="numbers"></img>
            <label>How old are you?</label>
            <input type="text" value={value} onChange={childsAge} />
        </div>
    )
}
