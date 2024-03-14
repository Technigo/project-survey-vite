export const Summary = ({ optionSummary, index, isStranger }) => {
  console.log(optionSummary);
  console.log(index);

  return (
    <section className="summary-section">
      <p>Thank you for participanting! Here are your choices:</p>
      <div className="answer1">
        <p>Your favorite location for your dream home: {optionSummary[0]}</p>
      </div>

      <div className="answer">
        <p>Your ideal color theme for the interior:</p>
        <div
          className="color-display"
          style={{
            backgroundColor: optionSummary[1],
            width: "30px",
            height: "30px",
          }}
        ></div>
      </div>

      <div className="answer">
        <ul>
          The features you would like to have at home:
          {optionSummary[2].map((feature, featureIndex) => (
            <li key={featureIndex}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="answer">
        <p>
          You have rated the importance of a home office or workspace as
          <span> {optionSummary[3]}</span> out of 10.
        </p>
      </div>

      <div className="answer">
        <p>
          You would like to show your dream home to
          {optionSummary[4]}
        </p>
      </div>

      {isStranger && (
        <div className="answer">
          <p>
            And you wish that person would be:
            {optionSummary[5]}
          </p>
        </div>
      )}
    </section>
  );
};
