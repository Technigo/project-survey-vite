import "./EcoCheck.css"

// eslint-disable-next-line
export const EcoCheck = ({ updateFormData, value }) => {

    const eco = (e) => updateFormData("eco", e.target.checked)

    return (
        <div>
            <h3>Would you like to take the train for the environment or fly there for convenience?</h3>
            <img src="/images/eco-leaf.png" alt="A leaf icon."></img>
            <label className="label-small">
                <label>
                    <input  type="checkbox"
                            checked={value}
                            onChange={eco} 
                    />
                    Want to stay on the ground?
                </label>
            </label>
        </div>
    )
}