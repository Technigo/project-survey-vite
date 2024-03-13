import { Survey } from "./components/Survey"
import { Header } from "./components/Header"
import "./app.css"


export const App = () => {
  return <>
    <Header />
    <div className="main-container">
    <Survey />
    </div></>;
};
