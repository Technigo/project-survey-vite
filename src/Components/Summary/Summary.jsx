import "./Summary.css";

export const Summary = ({ optionSummary, isStranger }) => {
  return (
    <section className="summary-section">
      <div className="text-area">
        <h2 className="end-text">Thank you for participanting!</h2>
        <h4 className="end-text">Here are your choices:</h4>
        <div className="answer-area">
          <div className="answer">
            <p>
              <span className="answer-description">
                Your favorite location for your dream home:{" "}
              </span>
              {optionSummary[0]}
            </p>
          </div>

          <div className="answer color-theme-answer">
            <p className="answer-description">
              Your ideal color theme for the interior:
            </p>
            <div
              className="color-display"
              style={{
                backgroundColor: optionSummary[1],
              }}
            ></div>
          </div>

          <div className="answer">
            <p className="answer-description feature">
              The features you would like to have at home:{" "}
            </p>
            <ul>
              {optionSummary[2].map((feature, featureIndex) => (
                <li className="feauture-summary" key={featureIndex}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="answer">
            <p>
              <span className="answer-description">
                You have rated the importance of a home office or workspace:{" "}
              </span>
              {optionSummary[3]} out of 10.
            </p>
          </div>

          <div className="answer">
            <p>
              <span className="answer-description">
                You would like to show your dream home to:{" "}
              </span>
              {optionSummary[4]}
            </p>
          </div>

          {isStranger && (
            <div className="answer">
              <p>
                <span className="answer-description">
                  And you wish that person would be:{" "}
                </span>
                {optionSummary[5]}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
