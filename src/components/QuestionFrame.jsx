import { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import NextButton from "./NextButton";
import { questions } from "../question.json";

const QuestionFrame = () => {
  const [clicked, setClicked] = useState(false);
  const [qNum, setQNum] = useState(0);

  const handleChange = () => {
    setClicked(!clicked);
    setQNum(qNum + 1);
  };

  // State object to store form variables
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isSubscribed: false,
    selectedOption: "option1",
  });

  // Event handler for form input changes
  // <input type="checkbox/radio" onChange={} name="username" value={userinput} ></input>
  const handleInputChange = event => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData, //spread syntax
      [name]: newValue,
    });
  };

  // Event handler for form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Process the form data here
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <Header question={questions[qNum]} />
      <form onSubmit={handleSubmit}>
        <Question
          qNum={qNum}
          formData={formData}
          onChange={handleInputChange}
        />
        <NextButton onClick={handleChange} />
      </form>
    </div>
  );
};

export default QuestionFrame;
