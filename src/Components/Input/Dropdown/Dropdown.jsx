import PropTypes from "prop-types"
import "./dropdown.css"

export default function Dropdown({
  name,
  options,
  label,
  value,
  onChange,
  error,
  onOptionChange,
}) {
  const handleChange = (e) => {
    const selectedValue = e.target.value
    onChange(e)
    if (name === "purpose" && selectedValue === "Something else") {
      onOptionChange(true)
    } else {
      onOptionChange(false)
    }
  }

  const labelId = `${name}-label`

  return (
    <div className="form-group">
      <label
        id={labelId}
        htmlFor={name}
        className={`dropdown-label ${error ? "error-label" : ""}`}
      >
        {label}:
      </label>
      <div
        className={`dropdown-container ${
          error ? "error-dropdown-container" : ""
        }`}
      >
        <select id={name} name={name} value={value} onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <div
          className="error-message"
          role="alert"
          aria-live="polite"
          aria-labelledby={labelId}
        >
          {error}
        </div>
      )}
    </div>
  )
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
  onOptionChange: PropTypes.func,
}
