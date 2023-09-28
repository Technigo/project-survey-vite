import "./EcoCheck.css"

// eslint-disable-next-line
export const EcoCheck = ({ updateFormData, value }) => {

    const eco = (e) => updateFormData("eco", e.target.checked)

    return (
        <div>
            <h3>This is eco check</h3>
            <img src="/images/eco-leaf.png" alt="A leaf icon."></img>
            <label>
                <input  type="checkbox"
                        checked={value}
                        onChange={eco} 
                />
                Want to stay on the ground?
            </label>
        </div>
    )
}