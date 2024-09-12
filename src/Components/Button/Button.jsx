import previousQuestionBtnIcon from '/assets/arrow_left.svg';
import nextQuestionBtnIcon from '/assets/arrow_right.svg';
import style from './Button.module.css'

export const Button = ({ prevStep, nextStep, currentStep }) => {
  //<div className={style.QuestionBtnContainer}>
  return (
    <div>
      {currentStep > 1 && currentStep < 5 &&
        <button onClick={prevStep} className={style.previousButton}>
          <img src={previousQuestionBtnIcon} alt="Previous Step" />
        </button>
      }
      {currentStep < 4 &&
        <button onClick={nextStep} className={style.nextButton}>
          <img src={nextQuestionBtnIcon} alt="Next Step" />
        </button>
      }

    </div>
  );
};





