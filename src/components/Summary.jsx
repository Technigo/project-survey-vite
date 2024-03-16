import PropTypes from "prop-types";

export const Summary = ({ name, course, level, text, recommend }) => {
  return (
    <p>
      Thank you, {name} for your answers. You have partcipated in a {course} course on {level} level and want to share
      the following with us: {text}. Would you recommend us to someone else: {recommend} Feel free to contact us at
      climbing@thewall.xxx or XXX-XXXXXXX if you have any questions or just want to chat about climbing. Hope we see you
      soon!
    </p>
  );
};

Summary.propTypes = {
  name: PropTypes.string,
  course: PropTypes.string,
  level: PropTypes.string,
  text: PropTypes.string,
  recommend: PropTypes.string,
};
