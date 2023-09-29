
export const Name = ({ updateFormData, value }) => {
    const childsName = (event) => updateFormData("name", event.target.value);

    return (
        <div class="name">
            <img src="/assets/name.png"></img>
            <label>What is your name?</label>
            <input type="text" value={value} onChange={childsName} />
        </div>
    )
}
