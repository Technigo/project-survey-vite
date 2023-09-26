import { textTemplates } from "./AnswerTemplates.jsx"

export const AnswersSummary = ({ userAnswers }) => {
  // Function to generate an answer based on user responses
  const generateAnswer = () => {
    // Define the template keys based on user responses
    const templateKey = `${userAnswers[1]}-${userAnswers[2]}-${userAnswers[3]}`;

    // Check if a specific template exists, otherwise use the default template
    const answerTemplate = textTemplates[templateKey] || textTemplates.default;

    // Replace placeholders in the template with actual responses
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
    </div>
  );
};
