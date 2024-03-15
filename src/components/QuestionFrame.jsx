import { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import NextButton from "./NextButton";
import { questions } from "../question.json";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

const QuestionFrame = ({ createSummary }) => {
  const [qNum, setQNum] = useState(0);
  const [validated, setValidated] = useState(false);
  // const [error, setError] = useState(false);
  // State object to store form variables
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    frequency: "",
    level: 0,
    waysToDeal: "",
    subscription: [],
  });

  // Event handler for form input changes
  const handleInputChange = event => {
    const { name, value, type } = event.target;
    const newValue =
      type === "checkbox" ? [...formData.subscription, value] : value;
    let validation = false;
    if (name === "email") {
      if (formData.name) {
        validation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
      } else {
        validation = false;
      }
    } else if (name === "name") {
      validation = formData.email ? true : false;
    } else {
      validation = true;
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
    console.log("Validated:", validated);
    setValidated(validation);
  };

  // Event handler for form submission
  const handleSubmit = event => {
    event.preventDefault();

    if (validated && qNum === 4) {
      createSummary(formData);
    } else if (validated) {
      setValidated(false);
      setQNum(qNum + 1);
    }
  };

  return (
    <div className="question-page">
      <Header question={questions?.[qNum]} />

      <form onSubmit={handleSubmit}>
        <ProgressBar progress={qNum + 1} />
        <Question
          qNum={qNum}
          formData={formData}
          onChange={handleInputChange}
        />
        <NextButton qNum={qNum} validated={validated} />
      </form>
    </div>
  );
};

QuestionFrame.propTypes = { createSummary: PropTypes.func.isRequired };

export default QuestionFrame;
