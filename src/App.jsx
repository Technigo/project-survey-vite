import QuestionPage from "./components/QuestionPage";
import { useState } from "react";
import { StartPage } from "./components/StartPage";
import { SummaryPage } from "./components/SummaryPage";

export const App = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [clicked, setClicked] = useState(false);

  // render the form data
  const renderFinalPage = data => {
    console.log(data);
    const summaryText = `Hello ${data.name}! You are ${
      data.frequency
    } stressed. Your stress level is ${data.level}%. You have ${
      data.waysToDeal
    } way(s) to handle the stress. And you have subscribed to our updates on ${data.subscription.join(
      ", "
    )} to your email ${data.email}`;
    //convert summary string into an array
    setShowSummary(summaryText.split("!"));
  };

  // set clicked state
  const handleClick = () => {
    setClicked(true);
  };

  return (
    <>
      {clicked && !showSummary ? (
        <QuestionPage createSummary={renderFinalPage} />
      ) : !clicked && !showSummary ? (
        <StartPage onClick={handleClick} />
      ) : (
        <SummaryPage summary={showSummary} />
      )}
    </>
  );
};
