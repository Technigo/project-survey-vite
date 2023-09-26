import { Header } from "./assets/Components/Header";
import { Questions } from "./assets/Components/Questions";

// import { Questions } from "./assets/Components/Questions";

export const App = () => {
  return (
    <div className="survey-container">
      <Header />
      <Questions />
    </div>
    
  );
};
