import "./Button.css";

export const Button = ({
  handleNextQuestion,
  handlePreviousQuestion,
  currentQuestionIndex,
  lastQuesionIndex,
  isStranger,
}) => {
  const removLastQuestion = lastQuesionIndex - 1;

  return (
    <section className="button-section">
      {isStranger ? (
        <>
          {currentQuestionIndex > lastQuesionIndex && (
            <div className="submit-text-area">
              <p className="submit-text">Are you satisfied with your choice?</p>
              <p className="submit-text">
                Click previous button to go back, click submit button to send
                your choices.
              </p>
            </div>
          )}

          {currentQuestionIndex > 0 &&
            currentQuestionIndex <= lastQuesionIndex + 1 && (
              <button
                className="previous-btn"
                type="button"
                onClick={handlePreviousQuestion}
              >
                Previous
              </button>
            )}

          {currentQuestionIndex <= lastQuesionIndex && (
            <button
              className="next-btn"
              type="button"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}

          {currentQuestionIndex > lastQuesionIndex && (
            <>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </>
          )}
        </>
      ) : (
        <>
          {currentQuestionIndex > removLastQuestion && (
            <div className="submit-text-area">
              <p className="submit-text">Are you satisfied with your choice?</p>
              <p className="submit-text">
                Click previous button to go back, click submit button to send
                your choices.
              </p>
            </div>
          )}

          {currentQuestionIndex === 0 && (
            <p className="style-button" aria-hidden="true"></p>
          )}

          {currentQuestionIndex > 0 &&
            currentQuestionIndex <= removLastQuestion + 1 && (
              <button
                className="previous-btn"
                type="button"
                onClick={handlePreviousQuestion}
              >
                Previous
              </button>
            )}

          {currentQuestionIndex <= removLastQuestion && (
            <button
              className="next-btn"
              type="button"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}

          {currentQuestionIndex > removLastQuestion && (
            <>
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </>
          )}
        </>
      )}
    </section>
  );
};
