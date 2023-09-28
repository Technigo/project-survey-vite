import PropTypes from "prop-types";

export const InfoQuestions = ({name, email, onChangeName, onChangeEmail}) => {
  return (
    <div className='info-questions'>
      <label htmlFor="name">Name :
        <input type="text" id="name" name="name" placeholder="Your name" value={name} onChange={onChangeName} required/>
      </label>
      <label htmlFor="email">Email :
        <input type="email" id="email" name="email" placeholder="email@example.com" value={email} onChange={onChangeEmail} required/>
      </label>
    </div>
  )
};

InfoQuestions.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  onChangeName: PropTypes.func,
  onChangeEmail: PropTypes.func
};
