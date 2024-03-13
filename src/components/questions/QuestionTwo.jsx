import "./Questions.css";
import { useState } from "react";

export const QuestionTwo = () => {
  const [radioButton] = useState();

  return (
    <form>
      <h3>Does music make you happy?</h3>
      <label>
        <p>Yes, absolutely</p>
        <input
          type="radio"
          value="Yes"
          onChange={(event) => event.target.value}
          checked={"Yes"}
        />
      </label>
      <label>
        <p>No, I like the silence</p>
        <input
          type="radio"
          value="No"
          onChange={(event) => event.target.value}
          checked={"NO"}
        />
      </label>
    </form>
  );
};
