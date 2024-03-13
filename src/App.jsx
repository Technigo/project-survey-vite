import { Survey, Result } from "./components/Survey";
import { Header } from "./components/Header";
import "./app.css";

export const App = () => {
  return (
    <>
      <Header />
      <div className="result-container main-container">
        <Result />
      </div>
      <div className="main-container">
        <Survey />
      </div>
    </>
  );
};
