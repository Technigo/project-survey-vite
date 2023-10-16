import PropTypes from 'prop-types'

export const Number = ({ updateFormData, value }) => {
  const numberInput = (e) => updateFormData("number", e.target.value)
  return (
    <div className="form-container">
      <div className="input-wrapper">
        <label><h2>What is your favourite number?</h2></label>
        <input type="number" id="number-input" value={value} onChange={numberInput} />
      </div>
    </div>
  )
}

Number.propTypes = {
  updateFormData: PropTypes.any,
  value: PropTypes.any,
}
