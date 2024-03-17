import { useState } from "react"
import { BackNextButtons } from "./BackNextButtons";

const options = [
  {
    label: "Every Time! A clean desk is a productive desk, right?",
    value: "Your focus is on fire! You're so determined to get things done that you end up channeling your energy into organizing your workspace. ",
  },
  {
    label: "Occasionally, if something shiny distracts me.",
    value: "You're a master of balancing productivity and distraction. While you sometimes find yourself lured away by shiny objects (literally or metaphorically), you're able to reign in your focus most of the time and get back on track with your to-do lis",
  },
  {
    label: "Rarely, I'm all about efficiency.",
    value: " Efficiency is your middle name! Rearranging your desk is a rare occurrence for someone as laser-focused as you.",
  },
  {
    label: "Wait, was I supposed to have a to-do list?",
    value: "You're a free spirit! While you may not always adhere to traditional organization methods like to-do lists, your spontaneity and adaptability keep life interesting. Who needs a list when you're living life to the fullest, right?",
  },
];

export const Question1 = ({ onNext, onBack, setFormData }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [fieldsFilled, setFieldsFilled] = useState(false);

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    setFieldsFilled(true);
    setFormData((prevFormData) => ({
      ...prevFormData,
      answer1: selectedValue,
    }));
  };

  return (
    <div className="container-question">
      <label className="question" htmlFor="question1">
        When you finally sit down to do you your to-do list, how often do you
        end up rearranging your desk instead?
      </label>
      <ul>
        {options.map((option) => (
          <li className="radio-option" key={option.value}>
            <label htmlFor={option.value}>{option.label}</label>
            <input
              type="radio"
              id={option.value}
              name="question1"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={handleOptionChange}
            />
          </li>
        ))}
      </ul>
      <BackNextButtons onNext={onNext} onBack={onBack} disabled={!fieldsFilled} />
    </div>
  );
};

//disabled={!fieldsFilled}/ the user can move further without choosing something