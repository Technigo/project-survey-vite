import PropTypes from "prop-types";
import { useState } from "react";
import Summary from "./Summary";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    // Store form data
    question1: " ",
    question2: " ",
    question3: " ",
  });
  const [submitted, setSubmitted] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(formData);
      setSubmitted(true);
      console.log("Form Data: ", formData);
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  // Validate the form
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  return (
    <div className="form">
      {submitted ? (
        <Summary formData={formData} />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="textQuestion">
            <label>
              Name your favorite artist:
              <br />
              <input
                type="text"
                name="question1"
                value={formData.question1}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="radioQuestion">
            <label>
              Do you listen to music every day?
              <br />
              <input
                type="radio"
                name="question2"
                value="yes"
                checked={formData.question2 === "yes"}
                onChange={handleInputChange}
              />
              <span className="radioButtonLabel">Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="no"
                checked={formData.question2 === "no"}
                onChange={handleInputChange}
              />
              <span className="radioButtonLabel">No</span>
            </label>
          </div>
          <div className="selectQuestion">
            <label>
              Choose your favorite music genre:
              <br />
              <select
                id="question3"
                name="question3"
                value={formData.question3}
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Country">Country</option>
                <option value="Techno">Techno</option>
              </select>
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
