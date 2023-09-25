// import { SubmitButton } from "./FormElements/SubmitButton";

// Main component for rendering questions, this could be restructured.
export const Questions = ({ questions }) => { /* Gets the questions data from App.jsx */
    return (
        questions.map((question, index) => { /* Maps through the questions data, for each question and index. Index is used for the key */
            return (
                /* To prevent the default reload of the webpage on submit*/
                <form onSubmit={event => event.preventDefault()} className="question-section" key={index}>
                    {/* The question is mapped out here */}
                    <p>{question.question}</p>
                    {question.type === "text" ? (
                        // Render a text input field for questions of type "text", type comes from the questions data. By adding in the type as a property in the json we can use if/else to decide what type of form element we want to render
                        <input className="input-field" type="text" />
                    ) : question.type === "select" ? (
                        // Render a select dropdown for questions of type "select"
                        <select className="input-field">
                            {/* Since the answers data is in an array we need to do an other map here, here we change the name of "index" to answerIndex to avoid confusion and to be able to add a new key */}
                            {question.answers.map((answer, answerIndex) => (
                                <option key={answerIndex} value={answer.value}>
                                    {/* The answer to the questions, comes from the data as well */}
                                    {answer.text}
                                </option>
                            ))}
                        </select>
                    ) : (
                        // Render radio buttons for questions of type "radio"
                        // The class answerssection makes the answers line up correctly via css
                        <div className="answers-section">
                            {question.answers.map((answer, answerIndex) => (
                                <label key={answerIndex}>
                                    <input type="radio" name={`question-${index}`} value={answer.value} />
                                    {answer.text}
                                </label>
                            ))}
                        </div>
                    )}
                    {/* We can add in the SubmitButton at some point to be able to use it */}
                    {/* <SubmitButton /> */}
                </form>
            );
        })
    );
}
