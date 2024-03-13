import "./Form.css"
import { QuestionOne } from "./questions/QuestionOne";
import { QuestionTwo } from "./questions/QuestionTwo";
import { QuestionThree } from "./questions/QuestionThree";



export const Form = () => {
  return (
    <form>
      <QuestionOne />
      <QuestionTwo />
      <QuestionThree />
    </form>
  )
}
