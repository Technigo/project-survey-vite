import { Survey } from "./components/Survey"
import Background from "./assets/background-green.jpg"
import "./app.css"


export const App = () => {
  return <>
    <img id="pink-background" src={Background} alt="greek sculpture holding pizza"/>
    <div className="main-container">
    <Survey />
    </div></>;
};
