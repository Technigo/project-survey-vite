import PropTypes from "prop-types";

export const YesNoOption = ({ recommend, setRecommend }) => {
  const yesNoOptions = ["Yes", "No"];

  return (
    <fieldset className="form-area">
      <legend>Would you recommend us to someone else?</legend>
      {yesNoOptions.map((option) => (
        <label className={`form-area radio-options ${recommend === option ? "selected" : ""}`} key={option}>
          <input
            type="radio"
            value={option}
            name="recommendation"
            onChange={(event) => setRecommend(event.target.value)}
            checked={recommend === option}
            required
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

YesNoOption.propTypes = {
  recommend: PropTypes.string.isRequired,
  setRecommend: PropTypes.func.isRequired,
};
