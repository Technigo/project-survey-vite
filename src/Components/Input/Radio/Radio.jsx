import PropTypes from "prop-types"
import "./radio.css"

function Radio({ name, listOfItems, label, value, onChange, error }) {
  return (
    <div className="form-group">
      <p className={`radio-label ${error ? "error-label" : ""}`}>{label}:</p>
      <div
        className={`radio-buttons-container ${
          error ? "error-radio-buttons-container" : ""
        }`}
      >
        {listOfItems.map((group, index) => (
          <label key={group} className="custom-radio">
            <input
              type="radio"
              id={`${name}-${index}`}
              name={name}
              value={group}
              onChange={onChange}
              tabIndex={0}
              checked={value === group}
              className="hidden-radio"
            />
            <span className="radio-text" tabIndex={0}>{group}</span>
          </label>
        ))}
      </div>
      {error && (
        <div className="error-message" role="alert" aria-live="polite">
          {error}
        </div>
      )}
    </div>
  )
}

Radio.propTypes = {
  listOfItems: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}

export default Radio
