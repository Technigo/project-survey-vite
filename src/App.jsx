import QuestionFrame from "./components/QuestionFrame";
import { useState } from "react";

export const App = () => {
  const [showSummary, setShowSummary] = useState(false);
  const renderFinalPage = data => {
    setShowSummary(true);
    console.log(data);
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
        <h1>Summary generated successfully!</h1>
      )}
    </>
  );
};
