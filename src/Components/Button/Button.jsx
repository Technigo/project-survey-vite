import previousQuestionBtnIcon from '/assets/arrow_left.svg';
import nextQuestionBtnIcon from '/assets/arrow_right.svg';

import style from './Button.module.css'


export const Button = ({ prevStep, nextStep }) => {
  return (
    <div className={style.QuestionBtnContainer}>
      <button onClick={prevStep} className={style.previousButton}>
        <img src={previousQuestionBtnIcon} alt="Previous Step" />
      </button>
      <button onClick={nextStep} className={style.nextButton}>
        <img src={nextQuestionBtnIcon} alt="Next Step" />
      </button>
    </div>
  );
};

