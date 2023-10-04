import style from "./PrimaryReason.module.css";
import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";
import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

export const PrimaryReason = ({ updateFormData, value, error }) => {
  const firstQuestion = (e) => updateFormData("primaryReason", e.target.value);
  const [isOther, setIsOther] = useState(false);

  const handleOther = (e) => {
    setIsOther(true);
    firstQuestion(e);
  };

  const handleChangeEvent = (e) => {
    setIsOther(false);
    firstQuestion(e);
  };

  return (
    <>
      <SecondaryHeading question="1. Please help us understand why you stopped ordering from us. Choose the primary reason:" />
      <ErrorMessage error={error} />

      <div className={style.input_wrapper}>
        <div className={style.input_field}>
          <input
            type="radio"
            id="highprice"
            name="primaryReason"
            value="Prices were too high"
            onChange={handleChangeEvent}
            checked={value === "Prices were too high"}
          />
          <label htmlFor="highprice">Prices were too high</label>
        </div>
        <div className={style.input_field}>
          <input
            type="radio"
            id="quality"
            name="primaryReason"
            value="Quality of products"
            checked={value === "Quality of products"}
            onChange={handleChangeEvent}
          />

          <label htmlFor="quality">Quality of products</label>
        </div>
        <div className={style.input_field}>
          <input
            type="radio"
            id="shipping"
            name="primaryReason"
            value="Shipping and delivery issues"
            checked={value === "Shipping and delivery issues"}
            onChange={handleChangeEvent}
          />
          <label htmlFor="shipping">Shipping and delivery issues</label>
        </div>
        <div className={style.input_field}>
          <input
            type="radio"
            id="betteralternative"
            name="primaryReason"
            value="Found better alternatives"
            checked={value === "Found better alternatives"}
            onChange={handleChangeEvent}
          />
          <label htmlFor="betteralternative">Found better alternatives</label>
        </div>
        <div className={`${style.input_field} ${style.input_other}`}>
          <div className={style.other_wrapper}>
            <input
              type="radio"
              id="other"
              name="primaryReason"
              value="Other"
              checked={value === "Other"}
              onChange={handleOther}
            />
            <label htmlFor="other">Other</label>
          </div>
          {isOther && (
            <input
              type="text"
              id="other"
              className={style.text_input}
              name="primaryReason"
              onChange={firstQuestion}
              placeholder="Other..."
            />
          )}
        </div>
      </div>
    </>
  );
};
