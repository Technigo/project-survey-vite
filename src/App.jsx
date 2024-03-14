import { useState } from "react";
import { Header } from "./Header.jsx";
import { Name } from "./components/AskName";
import { DestinationType } from "./components/AskDestType";
import { Period } from "./components/AskPeriodLength";
import { Budget } from "./components/AskBudget";
import { SubmitButton } from "./components/SubmitButton.jsx";
import { Summary } from "./components/Summary";
import "./App.css";

export const App = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    destinationType: "",
    period: "",
    budget: "",
  });

  //Function to show summary after submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSummary(true);
  };

  //Function to log change and update form upon input
  const handleInputChange = (name, value) => {
    console.log("Name:", name, "Value:", value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="app-body">
        {showSummary ? (
          <Summary
            name={formData.name}
            destinationType={formData.destinationType}
            period={formData.period}
            budget={formData.budget}
          />
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <Name onInputChange={handleInputChange} />
            <DestinationType onInputChange={handleInputChange} />
            <Period onInputChange={handleInputChange} />
            <Budget onInputChange={handleInputChange} />
            <SubmitButton />
          </form>
        )}
      </div>
    </div>
  );
};
