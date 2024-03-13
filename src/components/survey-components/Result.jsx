import PropTypes from "prop-types";
// import { LevelAnswer } from "./LevelAnswer";
// import { Choices } from "./Choices";
// import { Location } from "./location";

export const Results = (props) => {
  return (
    <div className="question results">
      <p>Your results: {props.level}</p>
    </div>
  );
};

Results.propTypes = {
  level: PropTypes.string.isRequired,
};
