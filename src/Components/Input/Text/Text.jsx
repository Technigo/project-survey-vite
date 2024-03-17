import PropTypes from "prop-types"
import "./text.css"

export default function Text({
  name,
  label,
  placeholder,
  autoComplete,
  value,
  onChange,
  error,
}) {
  const handleKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      return
    }
    event.preventDefault()
  }
  return (
    <div className="form-group">
      <label
        htmlFor={name}
        className={`text-label ${error ? "error-label" : ""}`}
      >
        {label}
      </label>
      <div className="text-container">
        <input
          id={name}
          type="text"
          placeholder={error ? "" : placeholder}
          name={name}
          autoComplete={autoComplete}
          onChange={onChange}
          onKeyDown={handleKeyPress}
          value={value}
          className={error ? "error-input" : ""}
        />
      </div>
      {error && (
        <div className="error-message" role="alert" aria-live="polite">
          {error}
        </div>
      )}
    </div>
  )
}

Text.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}
