import { SubmitButton } from "../SubmitButton/SubmitButton";
import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";
import style from "./Thankyou.module.css";

export const Thankyou = ({ onCurrentStep }) => {
  const handleClick = () => {
    onCurrentStep(1);
  };

  return (
    <>
      <div className={style.inner}>
        <SecondaryHeading question="Thank you for sharing your feedback with us!" />
        <p className={style.text}>Your €15 Discount Code: CXD48SS</p>
        <SubmitButton
          text="Exit Survey"
          onClickEvent={handleClick}
          url="https://palapets.com/discount/CXD48SS"
        />
      </div>
    </>
  );
};
