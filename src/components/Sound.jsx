import PropTypes from 'prop-types'

export const Sound = ({ updateFormData, value }) => {
  const chooseSound = (e) =>
    updateFormData("chooseSound", e.target.value);

  return (
    <div className="form-container">
      <label><h2>What can you hear?</h2></label>
      <div className="input-wrapper">
        <select value={value} id="sound-input" onChange={chooseSound}>
          <option>Choose a sound</option>
          <option value="whistle">Whistle</option>
          <option value="creak">Creak</option>
          <option value="howl">Howl</option>
          <option value="crash">Crash</option>
        </select>
      </div>
    </div>
  )
}

Sound.propTypes = {
  updateFormData: PropTypes.func.isRequired,
  value: PropTypes.any,
}

