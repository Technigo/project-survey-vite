import { Header } from "./Components/Header";
import { Questions } from "./Components/Questions";


export const App = () => {
  return (
    <div className="survey-container">
      <Header />
      <Questions />
    </div>
    
  );
};
