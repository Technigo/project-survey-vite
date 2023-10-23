export const FormBody = () => {
  return (
    <div className="form-body">
      <div className="form-title">
        <h1>🧊 Welcome to the IceBreaker Quiz 🧊</h1>
      </div>
      {/* Move this to component QuestionWrapper */}
      {/* First question using input field */}
      <div className="question-wrapper">
        <div className="question">
          <div className="question-info">
            <span className="question-order">1. </span>
            <div className="question-title-wrapper">
              <p>What is your nickname?</p>
            </div>
          </div>
          <div className="question-body">
            <div className="input-field">
              <input
                id="id"
                className="f-input"
                disabled="disabled"
                placeholder="Nickname"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
