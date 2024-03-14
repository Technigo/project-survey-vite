import PropTypes from "prop-types";
// import { LevelAnswer } from "./LevelAnswer";
// import { Choices } from "./Choices";
// import { Location } from "./location";

export const Result = (props) => {
  return (
    <div className="question results">
      <p>Your results: {props.level}</p>
    </div>
  );
};

Result.propTypes = {
  level: PropTypes.string.isRequired,
};
