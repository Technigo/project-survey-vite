import PropTypes from "prop-types";

export const LevelAnswer = (props) => {

       const level = props.level;
    console.log("Level: ", level)

  return <p>You Selected: {level}</p>;
};

LevelAnswer.propTypes = {
  selectedLevel: PropTypes.string.isRequired,
};

LevelAnswer.propTypes
