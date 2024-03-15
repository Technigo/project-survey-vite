import { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import NextButton from "./NextButton";
import { questions } from "../question.json";
import PropTypes from "prop-types";

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
    let emailValidation = false;
    if (name === "email") {
      console.log("name data", formData.name);
      emailValidation =
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) &&
        formData.name;
      console.log(emailValidation);
    } else if (name === "name") {
      emailValidation = formData.email ? true : false;
    } else {
      emailValidation = true;
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
    console.log("Validated:", validated);
    setValidated(emailValidation);
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
