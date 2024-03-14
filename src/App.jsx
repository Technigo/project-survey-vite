import QuestionFrame from "./components/QuestionFrame";
import { useState } from "react";

export const App = () => {
  const [showSummary, setShowSummary] = useState(false);

  const renderFinalPage = data => {
    console.log(data);
    const summaryText = `Hello ${data.name}! You are ${
      data.frequency
    } stressed. Your stress level is ${data.level}%. You have ${
      data.waysToDeal
    } way(s) to handle the stress. And you have subscribed to our updates on ${data.subscription.join(
      ", "
    )} to your email ${data.email}`;
    setShowSummary(summaryText.split("!"));
  };
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      {clicked && !showSummary ? (
        <QuestionFrame createSummary={renderFinalPage} />
      ) : !clicked && !showSummary ? (
        <div className="starting-page">
          <h1>How to cope with stress</h1>
          <h2>Find your inner peace </h2>
          <button className="start-button" onClick={handleClick}>
            Let&apos;s go
          </button>
        </div>
      ) : (
        <div className="summary-page">
          <h1>Form summary</h1>
          <h2>Submit successfully</h2>
          <div className="summary-text">
            <p>
              {showSummary[0]},<br></br>
              {showSummary[1]}
            </p>
            <p>
              We will send you the updates to your email. Please check your
              inbox and verify your email.
            </p>
            <p>Stay tuned!</p>
          </div>
        </div>
      )}
    </>
  );
};
