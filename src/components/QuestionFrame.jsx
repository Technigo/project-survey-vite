import { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import NextButton from "./NextButton";
import { questions } from "../question.json";
import PropTypes from "prop-types";

const QuestionFrame = ({ createSummary }) => {
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
    frequency: "",
    level: 0,
    subscription: [],
  });

  // Event handler for form input changes
  const handleInputChange = event => {
    const { name, value, type } = event.target;
    const newValue =
      type === "checkbox" ? [...formData.subscription, value] : value;
    setFormData({
      ...formData, //spread syntax
      [name]: newValue,
    });
  };

  // Event handler for form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Process the form data here
    if (qNum === 5) {
      createSummary(formData);
    }
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
        />
        <NextButton onClick={handleChange} />
      </form>
    </div>
  );
};

QuestionFrame.propTypes = { createSummary: PropTypes.func.isRequired };

export default QuestionFrame;
