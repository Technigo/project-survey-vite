import { SubmitButton } from "../../SubmitButton/SubmitButton";
import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";
import style from "./Thankyou.module.css";

export const Thankyou = ({ onCurrentStep }) => {
  const handleClick = () => {
    onCurrentStep(1);
  };

  return (
    <>
      <SecondaryHeading question="Thank you for sharing your feedback with us!" />
      <p className={style.text}>Your €15 Discount Code: PALA15</p>
      <SubmitButton text="Back" onClickEvent={handleClick} />
    </>
  );
};
