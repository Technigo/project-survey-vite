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
  const [errorMsg, setErrorMsg] = useState("");
  const [showError, setShowError] = useState(false);
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
    setShowError(false);
    const { name, value, type, checked } = event.target;
    const newValue =
      type === "checkbox" && checked
        ? [...formData.subscription, value]
        : type === "checkbox" && !checked
        ? //remove unselected option from the subscription list
          [...formData.subscription].filter(activity => activity !== value)
        : value;
    let validation = false;
    console.log(newValue);
    // the value is not "" or []
    if (newValue.length > 0) {
      if (name === "email") {
        if (formData.name) {
          validation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
          setErrorMsg("Email is invalid.");
        } else {
          validation = false;
          setErrorMsg("Name is empty.");
        }
      } else if (name === "name") {
        validation = formData.email ? true : false;
        setErrorMsg("Email is empty.");
      } else {
        validation = true;
        setErrorMsg("");
      }
    } else {
      validation = false;
      setErrorMsg(`You need to choose or type ${name}.`);
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
    setValidated(validation);
  };

  // Event handler for form submission
  const handleSubmit = event => {
    event.preventDefault();

    if (validated && qNum === 4) {
      createSummary(formData);
    } else if (validated) {
      setErrorMsg("");
      setValidated(false);
      setQNum(qNum + 1);
    } else {
      !errorMsg && setErrorMsg(`Please take action on the form.`);
      setShowError(true);
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
        {showError && (
          <div className="error-msg-container">
            <p className="error-msg">{errorMsg}</p>
          </div>
        )}
        <NextButton qNum={qNum} validated={validated} />
      </form>
    </div>
  );
};

QuestionFrame.propTypes = { createSummary: PropTypes.func.isRequired };

export default QuestionFrame;
