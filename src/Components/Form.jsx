import PropTypes from "prop-types";
import { useState, useRef } from 'react';
import Summary from "./Summary";

const Form = ({ onSubmit }) => {
    const [formData, setFormData]  = useState({ // Store form data
        question1: " ",
        question2: " ",
        question3: " " 
    }); 
const [submitted, setSubmitted] = useState(false);

const question1Ref = useRef(null);
const question2Ref = useRef(null);
const question3Ref = useRef(null);
const submitButtonRef = useRef(null);

 // Handle form input change
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
    console.log("Form Data: ", formData);
};

// Handle keyboard navigation
const handleKeyDown = (e, nextRef, prevRef) => {
    if (e.key === "Enter") {
        e.preventDefault();
        if (nextRef && nextRef.current) { 
            nextRef.current.focus();
        } else { 
            handleSubmit(e);
        }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (nextRef && nextRef.current) {
                nextRef.current.focus();
            } 
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (prevRef && prevRef.current) {
                prevRef.current.focus();
        }
    }
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
                onKeyDown={(e) => handleKeyDown(e, question2Ref, null)}
                ref={question1Ref}
                tabIndex={1}
                aria-label="Name your favorite artist"
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
                onKeyDown={(e) => handleKeyDown(e, question3Ref, question1Ref)}
                ref={question2Ref}
                tabIndex={2}
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
                onKeyDown={(e) => handleKeyDown(e, question3Ref, question1Ref)}
                tabIndex={3}
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
                onKeyDown={(e) => handleKeyDown(e, submitButtonRef, question2Ref)}
                ref={question3Ref}
                tabIndex={4}
             >
                <option value="">Select an option</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Country">Country</option>
                <option value="Techno">Techno</option>
                </select>
            </label>
            </div>
             <button type="submit" onKeyDown={(e) => handleKeyDown(e, null, question3Ref)} ref={submitButtonRef} tabIndex={5}>Submit</button>
        </form>
        )}
     </div>
  );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };


export default Form;