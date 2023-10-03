// Inputfield to allow being used multiple times in the application
export const InputField = ({ questions }) => {
    return (
        <div>
            <label htmlFor={questions.value}></label>
            <input className="input-field" type="text" name={questions.value} id={questions.value} />
        </div>
    )
}
