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
      <div className='header'>
        <h1>Technigo Bootcamp</h1>
        <h2>Evaluate the course</h2>
      </div>
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
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-binary</option>
            <option value="genderqueer">Genderqueer</option>
            <option value="genderfluid">Genderfluid</option>
            <option value="agender">Agender</option>
            <option value="bigender">Bigender</option>
            <option value="androgynous">Androgynous</option>
            <option value="two-spirit">Two-Spirit</option>
            <option value="demiboy">Demiboy</option>
            <option value="demigirl">Demigirl</option>
            <option value="gender-nonconforming">Gender Nonconforming</option>
            <option value="pangender">Pangender</option>
            <option value="neutrois">Neutrois</option>
            <option value="gender-questioning">Gender Questioning</option>
            <option value="gender-variant">Gender Variant</option>
            <option value="transgender">Transgender</option>
            <option value="cisgender">Cisgender</option>
            <option value="intergender">Intergender</option>
            <option value="polygender">Polygender</option>
            <option value="other"></option>
          </select>

          <label>How would you rate your experience at Technigo bootcamp?</label><br/>
          <input type="radio" id="very_satisfied" name="rate" value="very satisfied" onChange={handleChange} />
          <label htmlFor="very_satisfied">Very Satisfied</label><br/>

          <input type="radio" id="satisfied" name="rate" value="satisfied" onChange={handleChange} />
          <label htmlFor="satisfied">Satisfied</label><br/>

          <input type="radio" id="neither_agree_nor_disagree" name="rate" value="Neither agree nor disagree" onChange={handleChange} />
          <label htmlFor="neither_agree_nor_disagree">Neither Agree nor Disagree</label><br/>

          <input type="radio" id="dissatisfied" name="rate" value="dissatisfied" onChange={handleChange} />
          <label htmlFor="dissatisfied">Dissatisfied</label><br/>

          <input type="radio" id="very_dissatisfied" name="rate" value="very dissatisfied" onChange={handleChange} />
          <label htmlFor="very_dissatisfied">Very Dissatisfied</label><br/>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className='summary'>
          <h2>Thank you for participating!</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Rate:</strong> {formData.rate}</p>
        </div>
      )}
    </div>
  );
}

export default SurveyForm;
