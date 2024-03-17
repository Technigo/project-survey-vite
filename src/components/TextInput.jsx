import PropTypes from "prop-types";
import { HandleFocus } from "./HandleFocus.jsx";

export const TextInput = ({ text, setText }) => {
  const { placeholder, handleFocus, handleOnBlur } = HandleFocus(
    "Please, share what was good, fun or what we could have done better .."
  );

  return (
    <label className="text-form-area form-area">
      Share your thoughts of the course:
      <textarea
        rows="10"
        placeholder={placeholder}
        onChange={(event) => setText(event.target.value)}
        onFocus={handleFocus}
        onBlur={() => handleOnBlur(text)}
        value={text}
        required
      />
    </label>
  );
};

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};
