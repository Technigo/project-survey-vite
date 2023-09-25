export const EndSurvey = ({ fitnessGoal }) => {
    return (
        <div className="survey-summary">
            <h2>Thank you for participating in this survey!</h2>
            <h2>Here is a summary of your answers:</h2>
            {/* <h2>Your name is {name}</h2> */}
            {/* <h2>You love {favouriteExercise}</h2> */}
            {/* <h2>You live {environment}</h2> */}
            {/* <h2>You engage in physical activities {frequency}</h2> */}
            <h2>Your fitness goal is: {fitnessGoal}</h2>
        </div>
    )
};
