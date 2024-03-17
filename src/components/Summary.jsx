import PropTypes from "prop-types";

export const Summary = ({ name, course, level, text, recommend }) => {
  return (
    <div className="summary">
      <p>Thank you, {name} for your answers.</p>
      <p>
        You have partcipated in a {course} course on {level} level and want to share the following with us:
        <br></br>
        {text}
      </p>
      <p>Would you recommend us to someone else: {recommend}.</p>
      <p>
        Feel free to contact us at climbing@thewall.xxx or XXX-XXXXXXX if you have any questions or just want to chat
        about climbing.
      </p>
      <p>Hope we see you soon!</p>
    </div>
  );
};

Summary.propTypes = {
  name: PropTypes.string,
  course: PropTypes.string,
  level: PropTypes.string,
  text: PropTypes.string,
  recommend: PropTypes.string,
};
