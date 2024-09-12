import style from "./PrimaryReason.module.css";
import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";
export const PrimaryReason = ({ updateFormData }) => {
  const firstQuestion = (e) => updateFormData("primaryReason", e.target.value);

  return (
    <>
      <SecondaryHeading question="1. Please help us understand why you stopped ordering from us. Choose the primary reason:" />

      <div className={style.input_wrapper}>
        <div className={style.input_field}>
          <input
            type="radio"
            id="highprice"
            name="primaryReason"
            value="Prices were too high"
            onChange={firstQuestion}
          />
          <label htmlFor="highprice">Prices were too high</label>
        </div>
        <div className={style.input_field}>
          <input
            type="radio"
            id="quality"
            name="primaryReason"
            value="Quality of products"
            onChange={firstQuestion}
          />

          <label htmlFor="quality">Quality of products</label>
        </div>
        <div className={style.input_field}>
          <input
            type="radio"
            id="shipping"
            name="primaryReason"
            value="Shipping and delivery issues"
            onChange={firstQuestion}
          />
          <label htmlFor="shipping">Shipping and delivery issues</label>
        </div>
        <div className={style.input_field}>
          <input
            type="radio"
            id="betteralternative"
            name="primaryReason"
            value="Found better alternatives"
            onChange={firstQuestion}
          />
          <label htmlFor="betteralternative">Found better alternatives</label>
        </div>
        <div className={`${style.input_field} ${style.input_other}`}>
          <div>
            <input
              type="radio"
              id="other"
              name="primaryReason"
              value="other"
              onChange={firstQuestion}
            />
            <label htmlFor="other">Other</label>
          </div>
          <input
            type="text"
            id="other"
            className={style.text_input}
            name="primaryReason"
            onChange={firstQuestion}
            placeholder="Other..."
          />
        </div>
      </div>
    </>
  );
};
