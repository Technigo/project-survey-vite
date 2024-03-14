import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";
import { SubmitButton } from "../../SubmitButton/SubmitButton";
import style from "./Summary.module.css";

export const Summary = ({ data, nextStep }) => {
  console.log(data);

  const mydata = {
    primaryReason: "Price is too high",
    howOften: "once per week",
    suggestions: "lower price",
  };

  const handleClick = () => {
    onCurrentStep((c) => c);
  };

  return (
    <>
      <SecondaryHeading question="Survey Summary" />
      <div className={style.inner_box}>
        <h5>The primary reason:</h5>
        <p>{mydata.primaryReason}</p>
        <h5>How often you made an order:</h5>
        <p>{mydata.howOften}</p>
        <h5>suggestions: </h5>
        <p>{mydata.suggestions}</p>
        <SubmitButton text="Submit" onClickEvent={nextStep} />
      </div>
    </>
  );
};
