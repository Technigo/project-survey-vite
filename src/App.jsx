import QuestionFrame from "./components/QuestionFrame";
import { useState } from "react";

export const App = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  return (
    <div>
      {clicked ? (
        <QuestionFrame />
      ) : (
        <div className="starting-page">
          <h1>How to cope with stress</h1>
          <h2>Find your inner peace </h2>
          <button className="start-button" onClick={handleClick}>
            Let's go
          </button>
        </div>
      )}
    </div>
  );
};
