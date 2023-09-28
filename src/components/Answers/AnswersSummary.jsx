import { textTemplates } from "./AnswerTemplates.jsx";
import { Button } from "../FormElements/Button.jsx";

export const AnswersSummary = ({ userAnswers, handleRestart }) => {
  // Function to generate an answer based on user responses
  const generateAnswer = () => {
    // Defines the template keys based on user responses, name (index=[0]) is excluded here, since it's not present in the answers-template
    const templateKey = `${userAnswers[1]}-${userAnswers[2]}-${userAnswers[3]}`;

    // Declaring a variable for the answerTemplate
    const answerTemplate = textTemplates[templateKey];

    // Replaces placeholders in the template with actual responses
    const finalAnswer = answerTemplate
      .replace('[Name]', userAnswers[0])
      .replace('[Coffee]', userAnswers[1])
      .replace('[Activity]', userAnswers[2])
      .replace('[Description]', userAnswers[3]);

    return finalAnswer;
  };

  return (
    <div className="answers-summary">
      <h3>Your Morning Personality</h3>
      <p>{generateAnswer()}</p>
      {/* /*Buttoncomponent is reused, with text being changed to Restart*/}
      <Button onClick={handleRestart} text={"Restart"} longOrShortClass={"standalone"} />
    </div>
  );
};
