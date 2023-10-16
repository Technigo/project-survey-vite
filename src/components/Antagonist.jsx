import PropTypes from 'prop-types'

export const Antagonist = ({ value, updateFormData }) => {
    const chooseAntagonist = (e) => updateFormData("chooseAntagonist", e.target.value);


    return (
        <div className="form-container">
            <label> <h2>What is your biggest fear?</h2></label>
            <div>
                <div className="input-wrapper">
                    <select value={value} id="creature-input"
                        onChange={chooseAntagonist}>
                        <option value="">Select Creature</option>
                        <option value="Ghost">Ghost</option>
                        <option value="Witch">Witch</option>
                        <option value="Zombie">Zombie</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

Antagonist.propTypes = {
    updateFormData: PropTypes.func.isRequired,
    value: PropTypes.string,
}
