import React, { useState } from 'react';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    rate: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>Form Submitted</div>
      )}
    </div>
  );
};

export default SurveyForm;
