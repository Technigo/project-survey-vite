import "./StartPage.css";

export const StartPage = ({ handleNextQuestion }) => {
  // const handleClick = (begin) => {
  //   begin.onButtonClick();
  // }
  // const handleAdoptClick = () => {
  //   <Username />;
  // };
  return (
    <div className="start-wrapper">
      <h1>Adopt a Cat</h1>
      <h2>Find your fur-ever pet!</h2>
      <button onClick={handleNextQuestion} className="adopt-btn">
        Adopt now
      </button>
    </div>
  );
};
