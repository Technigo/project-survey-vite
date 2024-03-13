import { useState } from "react";

const Question = ({ formData, qNum, onChange }) => {
  //Question 1
  return (
    <div className="question-container">
      {qNum === 0 && (
        <div className="question-one question-options">
          <div>
            <label htmlFor="username">Enter your name: </label>
            <input
              onChange={onChange}
              type="text"
              name="name"
              value={formData.name}
            />
          </div>
          <div>
            <label htmlFor="useremail">Enter your email: </label>
            <input
              onChange={onChange}
              type="email"
              name="email"
              placeholder="hello123@gmail.com"
              value={formData.email}
            />
          </div>
        </div>
      )}
      {qNum === 1 && (
        <div className="question-two question-options">
          <input
            className="hidden radio-label"
            type="radio"
            name="frequency"
            id="always-button"
          />
          <label className="button-label" htmlFor="always-button">
            <p>Always</p>
          </label>
          <input
            className="hidden radio-label"
            type="radio"
            name="frequency"
            id="sometimes-button"
          />
          <label className="button-label" htmlFor="sometimes-button">
            <p>Sometimes</p>
          </label>
          <input
            className="hidden radio-label"
            type="radio"
            name="frequency"
            id="never-button"
          />
          <label className="button-label" htmlFor="never-button">
            <p>Never</p>
          </label>
        </div>
      )}
    </div>
  );
};

export default Question;
