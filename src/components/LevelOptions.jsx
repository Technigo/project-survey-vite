import PropTypes from "prop-types";

export const LevelOptions = ({ setLevel }) => {
  return (
    <>
      <label className="form-area select-style">
        Which level were the course at:
        <select defaultValue="Choose your level" required onChange={(event) => setLevel(event.target.value)}>
          <option disabled hidden value="Choose your level">
            Choose your level
          </option>
          <option value="Beginner">Beginner</option>
          <option value="Intermedier">Intermedier</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>
    </>
  );
};

LevelOptions.propTypes = {
  level: PropTypes.string.isRequired,
  setLevel: PropTypes.func.isRequired,
};
