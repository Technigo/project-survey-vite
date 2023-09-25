/* Create a submit button with an event listener so that when it is clicked on, the form inputs are hidden and a summary of all the user's answers is displayed */
// import EndSurvey from "./EndSurvey";

export const Summary = ({ fitnessGoal }) => {
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        /* Process the form data */
        setSubmitted(true);
    }

    return (
        {submitted ? ({
            <div className="survey-summary">
                <h2>Thank you for participating in this survey!</h2>
                <h2>Here is a summary of your answers:</h2>
                {/* <h2>Your name is {name}</h2> */}
                {/* <h2>You love {favouriteExercise}</h2> */}
                {/* <h2>You live {environment}</h2> */}
                {/* <h2>You engage in physical activities {frequency}</h2> */}
                <h2>Your fitness goal is: {fitnessGoal}</h2>
            </div>
        }) : (
            <form onSubmit={handleSubmit}>
                <p>Thank you!<br />Click Submit to get a summary of your answers.</p>
                <button type="submit">Submit</button>
            </form>
        )}
    )
}