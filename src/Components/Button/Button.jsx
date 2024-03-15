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
    <section>
      {isStranger ? (
        <>
          {currentQuestionIndex > lastQuesionIndex && (
            <>
              <p>Are you satisfied with your choice?</p>
              <p>
                Click previous button to go back, click submit button to send
                your choices.
              </p>
            </>
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
            <>
              <p>Are you satisfied with your choice?</p>
              <p>
                Click previous button to go back, click submit button to send
                your choices.
              </p>
            </>
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
