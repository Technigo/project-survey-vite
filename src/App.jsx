import { SurveyForm } from "./SurveyForm";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./App.css"
import "./SurveyForm"

export const App = () => {
  return (
    <body className="wrapper">
    <div className="container">
      <Header />
      <div className="survey-form">
      <SurveyForm />
      </div>
      <Footer />
    </div>
    </body>
  );
};
