import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import style from "./Summary.module.css";

export const Summary = ({ data, nextStep }) => {
  return (
    <>
      <SecondaryHeading question="Survey Summary" />
      <div className={style.inner_box}>
        <h5>The primary reason:</h5>
        <p>{data.primaryReason}</p>
        <h5>How often you made an order:</h5>
        <p>{data.howOften}</p>
        <h5>Suggestions: </h5>
        <p>{data.thirdQuestion}</p>
        <SubmitButton text="Submit" onClickEvent={nextStep} />
      </div>
    </>
  );
};
