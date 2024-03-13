import { SurveyForm } from "./SurveyForm";

// either export default or below - this is better. and need to add {} for "app" in main.jsx
export const App = () => {
  return (
    <div className="container">
      <h1>Break the ice survey</h1>
      <SurveyForm />
    </div>
  );
};
