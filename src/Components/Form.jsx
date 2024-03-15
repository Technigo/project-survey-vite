import { useState } from 'react';
import Summary from "./Summary";

const Form = () => {
    const [formData, setFormData]  = useState({ // Store form data
        question1: " ",
        question2: " ",
        question3: " " 
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
    setSubmitted(true);

    console.log("Form Data: ", formData);
};

return (
    <div className="form">
        {submitted ? (
            <Summary formData={formData} />
        ) : (
        <form onSubmit={handleSubmit}>
            <label>
                Name your favorite artist:
                <input 
                type="text"
                name="question1"
                value={formData.question1}
                onChange={handleInputChange}
                /> 
            </label>
            <br />
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
            Yes
            <br />
            <input 
                type="radio"
                name="question2"
                value="no"
                checked={formData.question2 === "no"}
                onChange={handleInputChange}
            />
            No
            </label>
            <br />
            <label>
                Choose your favorite music genre:
                <br />
                <select 
                name="question3"
                value={formData.question3}
                onChange={handleInputChange}
             >
                <option value="">Select an Option</option>
                <option value="Pop">Pop</option>
                <option value="Rock">Rock</option>
                <option value="Country">Country</option>
                <option value="Techno">Techno</option>
                </select>
            </label>
            <br />
             <button type="submit">Submit</button>
        </form>
        )}
     </div>
  );
};


export default Form;