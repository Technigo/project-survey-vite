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
              id="username"
              onChange={onChange}
              type="text"
              name="name"
              value={formData.name}
              required
            />
          </div>
          <div>
            <label htmlFor="useremail">Enter your email: </label>
            <input
              id="useremail"
              onChange={onChange}
              type="email"
              name="email"
              placeholder="hello123@gmail.com"
              value={formData.email}
              required
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
            value="always"
            onChange={onChange}
          />
          <label className="button-label" htmlFor="always-button">
            <p>Always</p>
          </label>
          <input
            className="hidden radio-label"
            type="radio"
            name="frequency"
            id="sometimes-button"
            value="sometimes"
            onChange={onChange}
          />
          <label className="button-label" htmlFor="sometimes-button">
            <p>Sometimes</p>
          </label>
          <input
            className="hidden radio-label"
            type="radio"
            name="frequency"
            id="never-button"
            value="never"
            onChange={onChange}
          />
          <label className="button-label" htmlFor="never-button">
            <p>Never</p>
          </label>
        </div>
      )}
      {qNum === 2 && (
        <div className="question-three question-options">
          <input
            id="range-bar"
            type="range"
            name="level"
            min="0"
            max="100"
            onChange={onChange}
            value={formData.level}
          />
          <label id="range-value" htmlFor="range-bar">
            {formData.level}
          </label>
        </div>
      )}
    </div>
  );
};

export default Question;
