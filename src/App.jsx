import { SurveyForm } from "./SurveyForm";
import { Footer } from "./Footer";

export const App = () => {
  return (
    <div className="container">
      <h1>Break the ice survey</h1>
      <SurveyForm />
      <Footer />
    </div>
  );
};
