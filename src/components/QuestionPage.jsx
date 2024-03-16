import { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import SubmitButton from "./SubmitButton";
import { questions } from "../question.json";
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

const QuestionPage = ({ createSummary }) => {
  // States
  const [qNum, setQNum] = useState(0);
  const [validation, setValidation] = useState({
    validated: false,
    errorMsg: "",
    showError: false,
  });
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
    const { name, value, type, checked } = event.target;
    const newValue =
      type === "checkbox" && checked
        ? [...formData.subscription, value]
        : type === "checkbox" && !checked
        ? //remove unselected option if any from the subscription array
          [...formData.subscription].filter(activity => activity !== value)
        : value;
    // the value is not "" or []
    if (newValue.length > 0) {
      if (name === "email" || name === "name") {
        name === "email"
          ? validateNameAndEmail(formData.name, newValue)
          : validateNameAndEmail(newValue, formData.email);
      } else {
        setValidation({
          showError: false,
          validated: true,
          errorMsg: "",
        });
      }
    } else {
      setValidation({
        showError: false,
        validated: false,
        errorMsg: `You need to choose or type ${name}.`,
      });
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // validate email and name
  const validateNameAndEmail = (name, email) => {
    let validation;
    let errorMsg;
    if (name && email) {
      validation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
      errorMsg = validation ? "" : "Email is invalid.";
    } else if (name) {
      validation = false;
      errorMsg = "Email is empty.";
    } else if (email) {
      validation = false;
      errorMsg = "Name is empty.";
    } else {
      validation = false;
      errorMsg = "Name and Email are empty.";
    }
    setValidation({
      showError: false,
      validated: validation,
      errorMsg: errorMsg,
    });
  };

  // Event handler for form submission
  const handleSubmit = event => {
    event.preventDefault();

    if (validation.validated && qNum === 4) {
      createSummary(formData);
    } else if (validation.validated) {
      //reset the validation details for new question page
      setValidation({
        errorMsg: "",
        showError: false,
        validated: false,
      });
      setQNum(qNum + 1);
    } else {
      // fail the validation and show the error message
      validation.errorMsg
        ? setValidation({ ...validation, showError: true })
        : setValidation({
            ...validation,
            showError: true,
            errorMsg: "Please answer the question.",
          });
    }
  };

  return (
    <div className="question-page">
      <Header question={questions[qNum]} />
      <form onSubmit={handleSubmit}>
        <ProgressBar progress={qNum + 1} />
        <Question
          qNum={qNum}
          formData={formData}
          onChange={handleInputChange}
        />
        {validation.showError && (
          <div className="error-msg-container">
            <p className="error-msg">{validation.errorMsg}</p>
          </div>
        )}
        <SubmitButton qNum={qNum} validated={validation.validated} />
      </form>
    </div>
  );
};

QuestionPage.propTypes = { createSummary: PropTypes.func.isRequired };

export default QuestionPage;
