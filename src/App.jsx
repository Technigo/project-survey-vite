import { Survey } from "./components/Survey";
import { Result } from "./components/Result"
import { Header } from "./components/Header";
import "./app.css";

export const App = () => {

  // ADD STATES HERE INSTEAD! 
  return (
    <>
      <Header />

      <div className="main-container">
        <Survey />
      </div>

      <div className="result-container main-container">
        <Result />
      </div>
    </>
  );
};
