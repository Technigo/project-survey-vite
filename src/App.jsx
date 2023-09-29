import { HeaderText } from "./components/Header";
import { MultistepForm } from "./components/MultistepForm";
import "./components/index.css";
import "./components/formStyle.css";

export const App = () => {


  return (
    <>
      <div className="form">
        <HeaderText />
        <MultistepForm />
      </div>

    </>
  );
};