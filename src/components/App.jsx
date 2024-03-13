import { Header } from "./Header.jsx";

export const App = () => {
  return (
    <div className="container">
      <div className="survey-container">
        <div className="header-box">
          <Header />
        </div>
        <h2 className="survey">How was your experience</h2>
      </div>
    </div>
  );
};
