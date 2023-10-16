import PropTypes from 'prop-types'

export const Setting = ({ updateFormData, value }) => {
  const selectedLocation = value || '';

  const setLocation = (e) => {
    updateFormData("setLocation", e.target.value)
  }

  return (
    <div className="form-container">
      <h2>Where are we?</h2>
      <form>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="haunted house"
              onChange={setLocation}
              checked={selectedLocation === "haunted house"}
            />
            Haunted house
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="dark forest"
              onChange={setLocation}
              checked={selectedLocation === "dark forest"}
            />
            Dark forest
          </label>
        </div>
        <div className="input-wrapper">
          <label>
            <input
              type="radio"
              value="old graveyard"
              onChange={setLocation}
              checked={selectedLocation === "old graveyard"}
            />
            Old graveyard
          </label>
        </div>
      </form>
    </div>
  )
}

Setting.propTypes = {
  updateFormData: PropTypes.func.isRequired,
  value: PropTypes.any,
}