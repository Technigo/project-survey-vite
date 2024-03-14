import { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import NextButton from "./NextButton";
import { questions } from "../question.json";
import PropTypes from "prop-types";

const QuestionFrame = ({ createSummary }) => {
  // const [clicked, setClicked] = useState(false);
  const [qNum, setQNum] = useState(0);

  // const handleSubmitBtn = () => {
  //   setQNum(qNum + 1);
  // };

  const handleKeyDown = e => {
    if (e.key === "Enter") e.preventDefault();
  };

  // State object to store form variables
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isSubscribed: false,
    selectedOption: "option1",
    frequency: "",
    level: 0,
    waysToDeal: "",
    subscription: [],
  });


  // Event handler for form input changes
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? [...formData.subscription, value] : value
    setFormData({
      ...formData, //spread syntax
      [name]: newValue,
    });
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (qNum === 4) {
      createSummary(formData);
    } else {
      setQNum(qNum + 1);
    }
    // Process the form data here
    // console.log("Form Data:", formData);
  };

  return (
    <div className="question-page">
      <Header question={questions?.[qNum]} />
      <form onSubmit={handleSubmit}>
        <Question
          qNum={qNum}
          formData={formData}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <NextButton />
      </form>
    </div>
  );
};

QuestionFrame.propTypes = { createSummary: PropTypes.func.isRequired };

export default QuestionFrame;
