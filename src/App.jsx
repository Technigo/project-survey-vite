import { useState } from "react";
import Header from "./Components/Header"
import Form from "./Components/Form"
import Summary from "./Components/Summary"


export const App = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data); // save the form data
    setSubmitted(true); 
  };

  return (
    <div className="survey">
      <Header />
      {submitted ? (
        <Summary formData={formData} />
      ) : (
        <Form onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
