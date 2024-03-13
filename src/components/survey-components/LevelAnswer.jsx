import { Results } from "./Result";
import PropTypes from "prop-types";

export const LevelAnswer = (props) => {
  const level = props.level;
  console.log("Level: ", level);

  return (
    // <p>You Selected: {level}</p>
    <Results level={level} />
  );
};

LevelAnswer.propTypes = {
  level: PropTypes.string.isRequired,
};
