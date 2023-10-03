export const ProgressBar = ({ currentStep, questionsLength }) => {
    return (
        <p className="progress-bar">Question {currentStep + 1} / {questionsLength}</p>
    )
}
