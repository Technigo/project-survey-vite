import { PropTypes } from "prop-types";
import { HandleFocus } from "./HandleFocus.jsx";

export const NameInput = ({ name, setName }) => {
  const { placeholder, handleFocus, handleOnBlur } = HandleFocus("Type your full name");

  return (
    <label className="text-form-area form-area">
      Full name
      <input
        type="text"
        placeholder={placeholder}
        onChange={(event) => setName(event.target.value)}
        onFocus={handleFocus}
        onBlur={() => handleOnBlur(name)}
        value={name}
        required
      />
    </label>
  );
};

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};
